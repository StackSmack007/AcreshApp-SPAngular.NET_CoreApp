import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { AuthService } from 'src/app/core/services/auth.service';
import { CategoryNode } from 'src/app/core/interfaces/categories/CategoryNode';
import { BehaviorSubject } from 'rxjs';

/**
 * Category data with nested structure.
 * Each node has a name and an optional list of children.
 */


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
  selector: 'acr-cat-three',
  templateUrl: 'category-three.component.html',
  styleUrls: ['category-three.component.css'],
})
export class CategoryThreeComponent {
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
    console.log(v);
    this.dataSource.data = v;
  }

  constructor(private authService: AuthService, ) { }//this.dataSource.data = TREE_DATA; }

  hasChild = (_: number, node: CategoryFlatNode) => node.expandable;

  get selected() {return this.selectedCategory.getValue()}

  display(id: number) { this.selectedCategory.next(id) }

  @Input()
  selectedCategory: BehaviorSubject<number>

  get canCreate() { return this.authService.isAuthenticated() }
  get isAdmin() { return this.authService.isAdmin }
  canEdit(node: CategoryFlatNode) { return this.authService.isAuthenticated() && (this.isAdmin || this.authService.getUserInfo().id === node.authorId) }
  canDelete(node: CategoryFlatNode) { return this.canEdit(node) && !node.hasRecipes }

  add(id: number) {
    console.log(this.dataSource.data);
  }
  edit(id: number) {
    alert("Advam  kum: " + id);
  }
  remove(id: number) {
    alert("Advam  kum: " + id);
  }
}
