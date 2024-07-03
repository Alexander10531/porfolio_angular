import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-loading-component',
  standalone: true,
  imports: [],
  templateUrl: './loading-component.component.html',
  styleUrl: './loading-component.component.css'
})
export class LoadingComponentComponent {

  	@ViewChildren("paw1") pawList! : QueryList<ElementRef>;     
  	intervalSuscription! : Subscription; 
  
  	ngAfterViewInit(): void {
      	let indexPaw : number = 0;      
      	let pawPrevious = this.pawList.last.nativeElement as SVGAElement;
      	this.intervalSuscription = interval(500).subscribe(()=>{
          	let pawElement = this.pawList.get(indexPaw)?.nativeElement as SVGAElement;
          	pawPrevious.setAttribute("fill", "#7B2CBF")
          	pawElement.setAttribute("fill", "#FFFFFF");
          	pawPrevious = this.pawList.get(indexPaw)?.nativeElement; 
          	indexPaw++;             
          		if(indexPaw == 5){
              	indexPaw = 0; 
              	pawPrevious = this.pawList.last.nativeElement;     
          	}
      	})
  	}   

  	ngOnDestroy(): void {
    	this.intervalSuscription.unsubscribe(); 
  	}
  
}
