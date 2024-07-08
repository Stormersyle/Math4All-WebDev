import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent implements OnInit{

  title = 'Math4All';
  items: NodeListOf<Element>;
  next: HTMLElement | null;
  prev: HTMLElement | null;
  countItem: number;
  itemActive: number;

  constructor() {
    this.items = document.querySelectorAll('.slider .item');
    this.next = document.getElementById('next');
    this.prev = document.getElementById('prev');
    this.countItem = this.items.length;
    this.itemActive = 0;
  }

  ngOnInit(): void {
    if (this.next) {
      this.next.onclick = () => {
        this.itemActive = (this.itemActive + 1) % this.countItem;
      }
      showSlider(this.itemActive, this.items);
    }

    if (this.prev) {
      this.prev.onclick = () => {
        this.itemActive = (this.itemActive - 1 + this.countItem) % this.countItem;
      };
      showSlider(this.itemActive, this.items);
    }

    function showSlider(itemActive: number, items: NodeListOf<Element>): void {
      let oldItem = document.querySelector('.slider .list .item.active');
      oldItem?.classList.remove('active')
      items[itemActive]?.classList.add('active');
    }
  }

  ngAfterViewInit(): void 
  {
    this.items = document.querySelectorAll('.slider .item');
    this.next = document.getElementById('next');
    this.prev = document.getElementById('prev');
    if (this.next) {
      this.next.onclick = () => {
        this.itemActive = (this.itemActive + 1) % this.countItem;
        showSlider(this.itemActive, this.items);
      };
    }

    if (this.prev) {
      this.prev.onclick = () => {
        this.itemActive = (this.itemActive - 1 + this.countItem) % this.countItem;
        showSlider(this.itemActive, this.items);
      };
    }

    function showSlider(itemActive: number, items: NodeListOf<Element>): void {
      let oldItem = document.querySelector('.slider .list .item.active');
      oldItem?.classList.remove('active')
      items[itemActive]?.classList.add('active');
    }

    this.countItem = this.items.length;

    let refreshInterval = setInterval( () => 
    {
      if (this.next)
      {
        this.next.click();
      }
    }, 10000)
  }
}
