import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
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


  



  // <a [routerLink]="['/detail', u._id]">
  //     <p style="text-align: center; color: black; font-size: 18px; margin-top: 10px;">{{u.name}}</p>
  // </a>
}
