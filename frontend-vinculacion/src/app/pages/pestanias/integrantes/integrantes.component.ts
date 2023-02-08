import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Integrantes } from '../../../models/pestanias/integrantes';
import { IntegrantesService } from '../../../service/pestanias/integrantes/integrantes.service';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css'],
})
export class IntegrantesComponent implements OnInit {
  constructor(
    private integrantesService: IntegrantesService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  currentEntity: Integrantes = {
    integrantesId: 0,
    numProyecto: '',
    nombreProyecto: '',
    horarioProyecto: '',
    cargoProyecto: '',
    funcionesProyecto: '',
    numEstudiantes: '',
    nombreEstudiantes: '',
    cedulaEstudiantes: '',
    especialidadEstudiantes: '',
    funcionesEstudiantes: '',
    numDocente: '',
    nombreDocente: '',
    horarioDocente: '',
    funcionesDocente: '',
    numInstitucion: '',
    nombreInstitucion: '',
    cargoInstitucion: '',
    funcionesInstitucion: '',
    numEmpresarial: '',
    nombreEmpresarial: '',
    telfEmpresarial: '',
    cargoEmpresarial: ''
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.findById(parseInt(params.get('id')!));
      }
    });
  }

  integrantesForm = this.fb.group({
    numProyecto: [this.currentEntity.numProyecto],
    nombreProyecto: [this.currentEntity.nombreProyecto, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    horarioProyecto: [this.currentEntity.horarioProyecto, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    cargoProyecto: [this.currentEntity.cargoProyecto, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    funcionesProyecto: [this.currentEntity.funcionesProyecto, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    numEstudiantes: [this.currentEntity.numEstudiantes],
    nombreEstudiantes: [this.currentEntity.nombreEstudiantes, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    cedulaEstudiantes: [this.currentEntity.cedulaEstudiantes, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    especialidadEstudiantes: [this.currentEntity.especialidadEstudiantes, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    funcionesEstudiantes: [this.currentEntity.funcionesEstudiantes, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    numDocente: [this.currentEntity.numDocente],
    nombreDocente: [this.currentEntity.nombreDocente, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    horarioDocente: [this.currentEntity.horarioDocente, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    funcionesDocente: [this.currentEntity.funcionesDocente, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    numInstitucion: [this.currentEntity.numInstitucion],
    nombreInstitucion: [this.currentEntity.nombreInstitucion, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    cargoInstitucion: [this.currentEntity.cargoInstitucion, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    funcionesInstitucion: [this.currentEntity.funcionesInstitucion, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    numEmpresarial: [this.currentEntity.numEmpresarial],
    nombreEmpresarial: [this.currentEntity.nombreEmpresarial, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    telfEmpresarial: [this.currentEntity.telfEmpresarial, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    cargoEmpresarial: [this.currentEntity.cargoEmpresarial, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
  });

  get numProyecto() {
    return this.integrantesForm.get('numProyecto');
  }
  get nombreProyecto() {
    return this.integrantesForm.get('nombreProyecto');
  }
  get horarioProyecto() {
    return this.integrantesForm.get('horarioProyecto');
  }
  get cargoProyecto() {
    return this.integrantesForm.get('cargoProyecto');
  }
  get funcionesProyecto() {
    return this.integrantesForm.get('funcionesProyecto');
  }
  get numEstudiantes() {
    return this.integrantesForm.get('numEstudiantes');
  }
  get nombreEstudiantes() {
    return this.integrantesForm.get('nombreEstudiantes');
  }
  get cedulaEstudiantes() {
    return this.integrantesForm.get('cedulaEstudiantes');
  }
  get especialidadEstudiantes() {
    return this.integrantesForm.get('especialidadEstudiantes');
  }
  get funcionesEstudiantes() {
    return this.integrantesForm.get('funcionesEstudiantes');
  }
  get numDocente() {
    return this.integrantesForm.get('numDocente');
  }
  get nombreDocente() {
    return this.integrantesForm.get('nombreDocente');
  }
  get horarioDocente() {
    return this.integrantesForm.get('horarioDocente');
  }
  get funcionesDocente() {
    return this.integrantesForm.get('funcionesDocente');
  }
  get numInstitucion() {
    return this.integrantesForm.get('numInstitucion');
  }
  get nombreInstitucion() {
    return this.integrantesForm.get('nombreInstitucion');
  }
  get cargoInstitucion() {
    return this.integrantesForm.get('cargoInstitucion');
  }
  get funcionesInstitucion() {
    return this.integrantesForm.get('funcionesInstitucion');
  }
  get numEmpresarial() {
    return this.integrantesForm.get('numEmpresarial');
  }
  get nombreEmpresarial() {
    return this.integrantesForm.get('nombreEmpresarial');
  }
  get telfEmpresarial() {
    return this.integrantesForm.get('telfEmpresarial');
  }
  get cargoEmpresarial() {
    return this.integrantesForm.get('cargoEmpresarial');
  }

  onSubmit(): void {
    console.table(this.currentEntity);
    this.integrantesService.save(this.currentEntity).subscribe(() => {
      this.currentEntity = {
        integrantesId: 0,
        numProyecto: '',
        nombreProyecto: '',
        horarioProyecto: '',
        cargoProyecto: '',
        funcionesProyecto: '',
        numEstudiantes: '',
        nombreEstudiantes: '',
        cedulaEstudiantes: '',
        especialidadEstudiantes: '',
        funcionesEstudiantes: '',
        numDocente: '',
        nombreDocente: '',
        horarioDocente: '',
        funcionesDocente: '',
        numInstitucion: '',
        nombreInstitucion: '',
        cargoInstitucion: '',
        funcionesInstitucion: '',
        numEmpresarial: '',
        nombreEmpresarial: '',
        telfEmpresarial: '',
        cargoEmpresarial: ''
      };
    });
  }

  findById(id: number): void {
    this.integrantesService.findById(id).subscribe((response) => {
      this.currentEntity = response;
    });
  }
}
