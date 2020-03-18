import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { AuthService } from 'src/app/core/services/auth.service';
import { CategoryNode } from 'src/app/core/interfaces/categories/CategoryNode';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

/**
 * Category data with nested structure.
 * Each node has a id, name, authorId, hasRecipes, and an optional list of children.
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
    //If it category was added or deleted upon refreshing categories it will expand to current!
    if (this.selectedCategory) this.expandParents(this.selectedCategory.getValue())
  }

  constructor(private authService: AuthService) { }

  /**Expands only provided id's parents in tree structure and closes everything else...*/
  public expandParents(id, expandSelf = true) {
    this.treeControl.collapseAll();
    if (!this.treeControl || id === null || id <= 0) return;
    const allNodes = this.treeControl.dataNodes;
    const node = allNodes.find(x => x.id === id);
    if (!node) return;
    let level = node.level;
    for (let i = allNodes.indexOf(node) - 1; i >= 0; i--) {
      const current = allNodes[i];
      if (current.level < level) {
        level--;
        this.treeControl.expand(current);
      }
      if (level === 0) break;
    }
    if (expandSelf && node.expandable) this.treeControl.expand(node);
  }

  /**Purpose is to provide parentNode in the tree stucture so it can be manipulated or retrieved it's id*/
  private getParentNodeById(id: number): CategoryNode {
    let parentCollection: CategoryNode[] = this.dataSource.data;
    const lineage = this.familyTreeOfNodeId(id);
    let result: CategoryNode;
    lineage.forEach(id => {
      result = parentCollection.find(x => x.id === id);
      parentCollection = result.children;
    })
    return result;
  }

  private updateTree() { this.dataSource.data = this.dataSource.data }//upon setter flattened_tree is refreshed!

  public addNode(id, parentId, name, hasRecipes = false, authorId = this.authService.getUserInfo().id, children = []) {
    let node: CategoryNode = { id, name, children, hasRecipes, authorId };
    let parentCollection: CategoryNode[];
    if (parentId === null) { parentCollection = this.dataSource.data; }
    else {
      const parentNode = this.getParentNodeById(+parentId);
      parentCollection = parentNode
        ? parentNode.children.find(x => x.id === +parentId).children
        : this.dataSource.data.find(x => x.id === +parentId).children
    }
    parentCollection.push(node);
    return this.updateTree();
  }

  editNode(id, parentId, name) {
    const node = this.getNodeById(id);
    const parentIdBefore = this.getParentId(id)
    if (+parentId === parentIdBefore) {
      node.name = name;
      return this.updateTree();
    }
    this.deleteNode(id);
    this.addNode(id, parentId, name, node.hasRecipes, node.authorId, node.children);
  }

  private getNodeById(id): CategoryNode {
    const parentNode = this.getParentNodeById(id);
    if (parentNode) return parentNode.children.find(x => x.id === id);
    return this.dataSource.data.find(x => x.id === id)
  }

  /**Returns parentId*/
  public deleteNode(id: number): number {
    const parentNode = this.getParentNodeById(id);
    const parentCollection = parentNode ? parentNode.children : this.dataSource.data;
    let targetIndex = parentCollection.indexOf(parentCollection.find(x => x.id === id));
    parentCollection.splice(targetIndex, 1);
    this.updateTree();
    return parentNode?.id;
  }

  /**Returns collection of id's of all parents before seeked child */
  private familyTreeOfNodeId(id: number) {
    let result: number[] = [id];
    while (true) {
      const parentId = this.getParentId(result[0]);
      if (parentId) {
        result = [parentId, ...result];
        continue;
      }
      result.pop();//no need of targetId
      return result;
    }
  }

  private getParentId(nodeId: number): number {
    if (!this.treeControl || nodeId === null || nodeId <= 0) return null;
    const allNodes = this.treeControl.dataNodes;
    const node = allNodes.find(x => x.id === nodeId);
    if (!node) return null;
    return allNodes.slice(0, allNodes.indexOf(node)).filter(x => x.level < node.level)?.pop()?.id
  }

  hasChild = (_: number, node: CategoryFlatNode) => node.expandable;

  @Input()//Only for quick select with display followed!!!
  selectedCategory: BehaviorSubject<number>
  chosenId: number = null;
  ngOnInit() {
    this.selectedCategory.pipe(delay(0)).subscribe(x => { this.chosenId = x; this.expandParents(x) })
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