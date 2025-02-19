import { Component, OnInit } from '@angular/core';
import {MessageService } from '../message.service';

@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.component.html',
  styleUrl: './moreinfo.component.css'
})
export class MoreinfoComponent implements OnInit {
  message: string;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.message = this.messageService.getMessage();
  }
}

