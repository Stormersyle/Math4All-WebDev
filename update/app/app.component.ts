import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = "Math4All"
  

  constructor(){}

  ngOnInit(): void {
    
    let vw = document.documentElement.clientWidth / 100;
    function setVw() : any  {
      document.documentElement.style.setProperty('--vw', `${vw}px`);
    }
    
      setVw();
      window.addEventListener('resize', setVw);
    }

    ngAfterViewInit(): void 
    {
      let vw = document.documentElement.clientWidth / 100;
      function setVw() : any  {
        document.documentElement.style.setProperty('--vw', `${vw}px`);
      }
      
        setVw();
        window.addEventListener('resize', setVw);
  
    }
}
  
  


