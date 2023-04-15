import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTabComponent } from './components/dynamic-tab/dynamic-tab.component';
import { TitleComponent } from './components/title/title.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';

@NgModule({
  declarations: [DynamicTabComponent, TitleComponent, ToolBarComponent],
  imports: [CommonModule],
  exports: [DynamicTabComponent, ToolBarComponent, TitleComponent],
})
export class SharedModule {}
