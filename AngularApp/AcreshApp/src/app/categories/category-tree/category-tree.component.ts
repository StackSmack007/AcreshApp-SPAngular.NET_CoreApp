import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { AuthService } from 'src/app/core/services/auth.service';
import { CategoryNode } from 'src/app/core/interfaces/categories/CategoryNode';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

/**
 * Category data with nested structure.
 * Each node has a name and an optional list of children.
 */

/** Flat node with expandable and level information */
interface CategoryFlatNode {
  id: number,
  name: string;
  authorId: string;
  hasRecipes: boolean;
  level: number;
  expandable: boolean;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'acr-cat-tree',
  templateUrl: 'category-tree.component.html',
  styleUrls: ['category-tree.component.css'],
})
export class CategoryTreeComponent implements OnInit {
  private _transformer = (node: CategoryNode, level: number): CategoryFlatNode => {
    return {
      id: node.id,
      authorId: node.authorId,
      name: node.name,
      hasRecipes: node.hasRecipes,
      level: level,
      expandable: !!node.children && node.children.length > 0,
    };
  }

  treeControl = new FlatTreeControl<CategoryFlatNode>(node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  @Input()
  set cats(v: CategoryNode[]) {
    this.dataSource.data = v;
    if (this.selectedCategory) this.expandParents(this.selectedCategory.getValue())
  }

  constructor(private authService: AuthService) { }

  public expandParents(id) {
    if (!this.treeControl) return;
    this.treeControl.collapseAll();
    if (id === null || id <= 0) return;
    const allNodes = this.treeControl.dataNodes;
    const node = allNodes.find(x => x.id === id);
    if (!node) return;
    this.treeControl.expand(node);
    let level = node.level;
    for (let i = allNodes.indexOf(node) - 1; i >= 0; i--) {
      const current = allNodes[i];
      if (current.level < level) {
        level--;
        this.treeControl.expand(current);
      }
      if (level === 0) break;
    }
  }

  public getParentId(nodeId: number): number {
    if (!this.treeControl) return null;
    this.treeControl.collapseAll();
    if (nodeId === null || nodeId <= 0) return null;
    const allNodes = this.treeControl.dataNodes;
    const node = allNodes.find(x => x.id === nodeId);
    if (!node) return null;
    let level = node.level;
    for (let i = allNodes.indexOf(node) - 1; i >= 0; i--) {
      const current = allNodes[i];
      if (current.level < level) return current.id;
    }
  }

  hasChild = (_: number, node: CategoryFlatNode) => node.expandable;

  @Input()//Only for quick select with display followed!!!
  selectedCategory: BehaviorSubject<number>
  chosenId: number = null;
  ngOnInit(): void {
    this.selectedCategory.pipe(delay(0)).subscribe(x => { this.chosenId = x })
  }

  get canCreate() { return this.authService.isAuthenticated() }
  get isAdmin() { return this.authService.isAdmin }
  canEdit(node: CategoryFlatNode) { return this.authService.isAuthenticated() && (this.isAdmin || this.authService.getUserInfo().id === node.authorId) }
  canDelete(node: CategoryFlatNode) { return this.canEdit(node) && !node.hasRecipes }

  display(id: number) { this.selectedCategory.next(id) }

  @Output()
  addEvent: EventEmitter<number> = new EventEmitter();
  add(pId: number) { this.addEvent.emit(pId); }

  @Output()
  deleteEvent: EventEmitter<{ name: string, id: number }> = new EventEmitter();
  askDelete(id: number, name: string) { this.deleteEvent.emit({ id, name }) }

  @Output()
  editEvent: EventEmitter<number> = new EventEmitter();
  edit(id: number) { this.editEvent.emit(id) }
}


/* Example of input structure **/
const TREE_DATA: CategoryNode[] = [
  {
    name: 'Fruit',
    id: 1,
    authorId: 'aaa',
    hasRecipes: false,
    children: [
      { name: 'Apple', id: 2, authorId: 'aaa', hasRecipes: false, },
      { name: 'Banana', id: 3, authorId: 'aaa', hasRecipes: false, },
      { name: 'Fruit loops', id: 4, authorId: 'aaa', hasRecipes: false, },
    ]
  }, {
    name: 'Vegetables',
    id: 5,
    authorId: 'aaa',
    hasRecipes: false,
    children: [
      {
        name: 'Green',
        id: 6,
        authorId: 'aaa',
        hasRecipes: false,
        children: [
          { name: 'Broccoli', id: 7, authorId: 'd0927f1d-9762-40ad-9fdd-90652911fea1', hasRecipes: false, },
          { name: 'Brussels sprouts', id: 8, authorId: 'aaa', hasRecipes: false, },
        ]
      }, {
        name: 'Orange',
        id: 9,
        authorId: 'aaa',
        hasRecipes: false,
        children: [
          { name: 'Pumpkins', id: 10, authorId: 'aaa', hasRecipes: false, },
          { name: 'Carrots', id: 11, authorId: 'aaa', hasRecipes: false, },
        ]
      },
    ]
  },
];