import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  produk = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getProdukDetail(this.route.snapshot.params['id']);

  }

  getProdukDetail(id) {
    this.http.get('http://localhost:3000/api/item/detail/'+id).subscribe(data => {
      this.produk = data;
    });
  }
}
