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

  // Nuestro formulario de registro.

  formRegister: FormGroup

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
    this.formRegister = new FormGroup({

      // Password validators are --> ^ - Comienzo del string, (?=[A-Z0-9]*[a-z]) miramos para asegurar al menos un carácter en minúsculas, (?=[a-zA-Z]*[0-9]) nos aseguramos al menos un número , (?=[a-z0-9]*[A-Z]) pedimos al menos una mayúscula, [a-zA-Z0-9]{8,} pedimos ocho o más caracteres, $ fin del string.

      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.required, Validators.pattern('^(?=[A-Z0-9]*[a-z])(?=[a-zA-Z]*[0-9])(?=[a-z0-9]*[A-Z])[a-zA-Z0-9]{8,}$')]),
      repeatPassword: new FormControl('', [Validators.required, Validators.pattern('^(?=[A-Z0-9]*[a-z])(?=[a-zA-Z]*[0-9])(?=[a-z0-9]*[A-Z])[a-zA-Z0-9]{8,}$')]),
      company: new FormControl('', [Validators.required]),
    }, [])
  }

  ngOnInit(): void {
  }

  async getDataForm() {
    try {
      const response = await this.usersService.register(this.formRegister.value)
      alert(response.success)
      this.router.navigate(['/login'])
    } catch (err) {
      console.log(err)
    }

  }
}



