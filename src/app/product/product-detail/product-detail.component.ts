import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  p_id: any;
  dataProductDetail: any;
  loading = false;
  listMenuName: any;
  categoryName: any;

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private scroller: ViewportScroller
  ) {}

  form = new FormGroup({
    full_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.loading = false;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.p_id = Number(params.get('id'));
      // console.log(this.p_id);
      this.service.findProductById(this.p_id).subscribe((res: any) => {
        this.dataProductDetail = res.data;
        this.loading = true;
        // console.log(res.data)
      });
    });
  }

  submit() {
    if (this.form.invalid) {
      alert('ປ້ອນຂໍ້ມູນໃຫ້ຄົບ');
      return;
    }

    this.service
      .createProductOrder({
        full_name: this.form.value.full_name,
        email: this.form.value.email,
        phone: this.form.value.phone,
        p_id: this.p_id,
      })
      .subscribe((res: any) => {
        if (res.status == 200) {
          alert('Successfully...?');
          this.clearForm();
        } else {
          alert('Error...?');
        }
      });
  }
  clearForm() {
    this.form.reset();
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  }
}
