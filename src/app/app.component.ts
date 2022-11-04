import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'goals-project';
  colors = ['#15171e', '#ffffff'];
  formGroup = this._formBuilder.group({
    isDark: false
  })

  constructor (private _formBuilder: FormBuilder) {
    this.changeTheme(this.colors[1], this.colors[0])
  }

  changeTheme (bg: string, font: string){
    document.documentElement.style.setProperty('--bg-color', bg);
    document.documentElement.style.setProperty('--font-color', font);
  } 

  themeToggler(){
    if (this.formGroup.value.isDark) {
      this.changeTheme(this.colors[0], this.colors[1])
    } else {
      this.changeTheme(this.colors[1], this.colors[2]) 
    }
  }
}
