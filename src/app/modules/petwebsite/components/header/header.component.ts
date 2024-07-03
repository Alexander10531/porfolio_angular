import { AfterViewInit, Component, ElementRef, ViewChild, input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit{

	@ViewChild('inputSearchBreed') inputSearch! : ElementRef; 

	ngAfterViewInit(): void {

		this.inputSearch.nativeElement.setAttribute('size', this.inputSearch.nativeElement.getAttribute('placeholder').length)
		
	}

}
