import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnDestroy{
  
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
