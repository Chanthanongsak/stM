import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {


  form = new FormGroup({
    fullName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    des: new FormControl('',[Validators.required]),
    // work_id: new FormControl(''),
  });


  constructor(
    private service: ContactService
  ) {}


  ngOnInit(): void {
    // this.loadData();
  }



  submit(){

    if (this.form.invalid) {
      alert('ປ້ອນຂໍ້ມູນໃຫ້ຄົບ')
      return
    }

    this.service.createSendMail(this.form.value).subscribe((res:any) => {
      alert('Send Mail Successfully...!');
      this.clearForm();
    })
  }

  clearForm(){
    this.form.reset()
  }


}
