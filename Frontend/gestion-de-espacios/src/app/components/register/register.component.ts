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

      // Password validators are --> ^ - Start of string, (?=[A-Z0-9]*[a-z]) look ahead to ensure at least one lower case alphabet, (?=[a-zA-Z]*[0-9]) look ahead to ensure at least one digit , (?=[a-z0-9]*[A-Z]) look ahead to ensure at least one upper case alphabet, [a-zA-Z0-9]{8,} captures eight or more alphanumeric characters, $ end of string

      username: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
      repeatPassword: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
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
