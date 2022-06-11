import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userForm: any

  profileForm: any;
  isSubmitted: boolean = false
  myForm!: any;
  arr: any = FormArray;

  // https://stackblitz.com/edit/angular6-dynamic-form-array-cpkb9b?file=src%2Fapp%2Fapp.component.ts

  constructor(private fb: FormBuilder) { }


  // ngOnInit(): void {

  //   this.userForm = this.fb.group({
  //     name: ["", Validators.required],
  //     email: ["", Validators.required],
  //     phone: ["", Validators.required],
  //     address: ["", Validators.required],
  //     date: ["", Validators.required],
  //     Family: this.fb.array([])
  //     family : this.fb.array([this.createItem()])

  //   });
  // }


  ngOnInit() {
    this.myForm = this.fb.group({
      name    : ["", Validators.required],
      email   : ["", Validators.required],
      phone   : ["", Validators.required],
      address : ["", Validators.required],
      date    : ["", Validators.required],
      arr     : this.fb.array([this.createItem()])
    })
  }
  createItem() {
    return this.fb.group({
      IceCreamName: ['', Validators.required],
      quantity: ['', Validators.required]
    })
  }

  addItem() {
    this.arr = this.myForm.get('arr') as FormArray;
    this.arr.push(this.createItem());
  }

  onSubmit() {
    console.log(this.myForm);
  }
  removeItem(i:number){
    this.arr = this.myForm.get('arr') as FormArray
    this.arr.removeAt(i);
  }

 
      }


  // get members():FormArray{
  //   return this.userForm.get('family') as FormArray
  // }
  // addMember(){
  //   this.members.push(this.memberadded())
  // }
  // memberadded(){
  //   console.log(this.memberadded())
  //   return this._fb.group({
  //     item : ["", Validators.required],
  //     quantity : ["", Validators.required]

  //   })

  // }
  //   removeMember(){
  //     this.members.removeAt(this.members.length-1)
  //   }
  //   onSubmit(_form:FormGroup){

  //   }
  //  submitForm(){
  //    console.log(this.userForm)
  //  }

