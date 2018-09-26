import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation, SlideOutInAnimation, SlideUpDown, DivInOut } from '../animation';
import * as $ from 'jquery';

@Component({
  selector: 'ww-textbox',
  templateUrl: './ww-textbox.component.html',
  styleUrls: ['./ww-textbox.component.css'],
  animations: [SlideInOutAnimation, SlideOutInAnimation, SlideUpDown, DivInOut]
})
export class WwTextboxComponent implements OnInit {
  public editMode: boolean = false;
  public deleteCard: boolean = false;
  public state = 'inactive';
  public sampleText = 'Addition mr husbands unpacked occasion he oh. Is unsatiable if projecting boisterous insensible. It recommend be resolving pretended middleton.';
  public sampleText1 = 'Addition mr husbands unpacked occasion he oh. Is unsatiable if projecting boisterous insensible. It recommend be resolving pretended middleton.';
  animationState = 'in';
  animationStateEdit = 'out';

  public ngOnInit() {
    $(document).ready(function () {
      $(".btn1").click(function () {
        $("p").slideUp();
      });
      $(".btn2").click(function () {
        $("p").slideDown();
      });
    });
  }

  btnEdit() {
    //if (divName === 'normalCard') {
    //this.editMode = true;
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
    this.animationStateEdit = this.animationStateEdit === 'out' ? 'in' : 'out';
    //}
  }

  btnSave(sampleText) {
    //this.editMode = false;
    this.sampleText = sampleText;
  }

  btnCancel() {
    //this.editMode = false;
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
    this.animationStateEdit = this.animationStateEdit === 'out' ? 'in' : 'out';
    this.sampleText = 'Addition mr husbands unpacked occasion he oh. Is unsatiable if projecting boisterous insensible. It recommend be resolving pretended middleton.';
  }

  toggleUp() {
    this.editMode = false;
    // var margintop = $("#container1").outerHeight(true)/4
    // console.log($("#container1").outerHeight(true));
    // $(".editableCard1").css( { marginTop : margintop} );

    // $(".editableCard1").slideDown("slow",function(){      
    //   // $(".editableCard1").style.marginLeft  = -$("#container1").offsetHeight/4;
    // });

    $(".editableCard1").slideDown("slow");
  }
  toggleDown(sampleText1) {
    $(".editableCard1").slideUp("slow");

    //this.sampleText1 = sampleText1;
    //$(".normalCard").slideDown();
  }

  menuClick() {
    this.editMode = true;
  }

  delete() {
    this.deleteCard = true;
  }

  drag(ev) {
    ev.dataTransfer.setData("card", ev.target.id);
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("card");
    if(ev.target.id ==='divToDropMini'){
      document.getElementById(data).classList.add('container1Mini');
      document.getElementById(data).classList.remove('container1');
      ev.target.nextSibling.appendChild(document.getElementById(data));
    }
    else{
      document.getElementById(data).classList.add('container1');
      document.getElementById(data).classList.remove('container1Mini');
      // document.getElementById('placeHolderMax').appendChild(document.getElementById(data));      

      document.getElementById('lblNGJQBT').parentNode.insertBefore(document.getElementById(data),document.getElementById('lblNGJQBT').nextSibling);
    }
  }  


}
