import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title = "Categories"
  categories : Category[] = [
    {id:1, name: "Computer"},
    {id:2, name: "Headphone & Mic"},
    {id:3, name: "Keyboard"},
    {id:4, name: "Monitor"},
    {id:5, name: "Network"},
    {id:6, name: "WebCam"},
    {id:7, name: "Cable"},
    {id:8, name: "Cooling"},
  ]
  ngOnInit(): void {
  }

}
