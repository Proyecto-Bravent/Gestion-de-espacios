import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {

  register: FormGroup

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
    this.register = new FormGroup({
      username: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
    }, [])
  }

  ngOnInit(): void {
  }

  async getDataForm() {
    try {
      const response = await this.usersService.register(this.register.value)
      alert(response.success)
      this.router.navigate(['/login'])
    } catch (err) {
      console.log(err)
    }

  }


}
