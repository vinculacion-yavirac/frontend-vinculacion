import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosGenerales } from '../../../models/pestanias/datos-generales';
import { DatosGeneralesService } from '../../../service/pestanias/datos-generales/datos-generales.service';
import { FormBuilder, Validators } from '@angular/forms';
import { customDateValidation } from 'src/app/shared/custom-date-validation.directive';

interface Carrera {
  id: number;
  carrera: string;
}

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css'],
})
export class DatosGeneralesComponent implements OnInit {
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.findById(parseInt(params.get('id')!));
      }
    });
  }

  carreraId: Carrera[] = [];

  carrerasMapping: Carrera[] = [
    {
      id:1,
      carrera: 'Software',
    },
    {
      id:2,
      carrera: 'Turismo',
    },
    {
      id:3,
      carrera: 'Diseño',
    },
    {
      id:4,
      carrera: 'Bomberos',
    }];



  /*getCarreras(cantonId: number) {
    return this.carrerasMapping
      .map((prov) => prov.carrera)
      .flat();
  }*/

  currentEntity: DatosGenerales = {
    dgId: 0,
    codigo: '',
    nombrep: '',
    nombrei: '',
    ciclo: '',
    cobertura: '',
    carreraId: 1,
    modalidadId: 1,
    fecha: '',
    plazo: '',
    financiamiento: '',
    vigencia: '',
    fechaPresentacion: '',
    fechaInicio: '',
    fechaFinal: '',
  };

  datosGeneralesForm = this.fb.group({
    codigoProyecto: [this.currentEntity.codigo, [Validators.required, Validators.pattern(/^[a-z0-9]+$/i)]],
    nombreProyecto: [this.currentEntity.nombrep, [Validators.required, Validators.pattern('[ñáéíóúA-Za-z ]+')]],
    nombreInstituto: [this.currentEntity.nombrei, [Validators.required]],
    ciclo: [this.currentEntity.ciclo, [Validators.required]],
    coberturaLocalizacion: [this.currentEntity.cobertura, [Validators.required, Validators.pattern('[ñáéíóúA-Za-z ]+')]],
    carrera: [this.currentEntity.carreraId, [Validators.required]],
    modalidad: this.fb.group({
      modalidadRadio: ['1'],
    }),
    fecha: [this.currentEntity.fecha, [Validators.required, customDateValidation(3000)]],
    plazoEjecucion: [this.currentEntity.plazo, [Validators.required, customDateValidation(3000)]],
    financiamiento: [this.currentEntity.financiamiento, [Validators.required, customDateValidation(3000)]],
    plazoVigenciaConvenio: [this.currentEntity.vigencia, [Validators.required, customDateValidation(3000)]],
    fechaPresentacion: [this.currentEntity.fechaPresentacion, [Validators.required, customDateValidation(3000)]],
    fechaInicio: [this.currentEntity.fechaInicio, [Validators.required, customDateValidation(3000)]],
    fechaFinal: [this.currentEntity.fechaFinal, [Validators.required, customDateValidation(3000)]],
  });


  onSubmit() {
    console.warn(this.datosGeneralesForm.value);
    console.table(this.currentEntity);
    this.datosGeneralesService.save(this.currentEntity).subscribe(() => {
      this.currentEntity = {
        dgId: 0,
        codigo: '',
        nombrep: '',
        nombrei: '',
        ciclo: '',
        cobertura: '',
        carreraId: 1,
        modalidadId: 1,
        fecha: '',
        plazo: '',
        financiamiento: '',
        vigencia: '',
        fechaPresentacion: '',
        fechaInicio: '',
        fechaFinal: '',
      };
    });
  }

  get codigoProyecto() {
    return this.datosGeneralesForm.get('codigoProyecto');
  }
  get nombreProyecto() {
    return this.datosGeneralesForm.get('nombreProyecto');
  }

  get nombreInstituto() {
    return this.datosGeneralesForm.get('nombreInstituto');
  }

  get ciclo() {
    return this.datosGeneralesForm.get('ciclo');
  }

  get coberturaLocalizacion() {
    return this.datosGeneralesForm.get('coberturaLocalizacion');
  }

  get carrera() {
    return this.datosGeneralesForm.get('carrera');
  }

  get modalidad() {
    return this.datosGeneralesForm.get('modalidad');
  }

  get fecha() {
    return this.datosGeneralesForm.get('fecha');
  }

  get plazoEjecucion() {
    return this.datosGeneralesForm.get('plazoEjecucion');
  }

  get financiamiento() {
    return this.datosGeneralesForm.get('financiamiento');
  }

  get plazoVigenciaConvenio() {
    return this.datosGeneralesForm.get('plazoVigenciaConvenio');
  }

  get fechaPresentacion() {
    return this.datosGeneralesForm.get('fechaPresentacion');
  }

  get fechaInicio() {
    return this.datosGeneralesForm.get('fechaInicio');
  }

  get fechaFinal() {
    return this.datosGeneralesForm.get('fechaFinal');
  }

  findById(id: number): void {
    this.datosGeneralesService.findById(id).subscribe((response) => {
      this.currentEntity = response;
    });
  }

  constructor(
    private fb: FormBuilder,
    private datosGeneralesService: DatosGeneralesService,
    private activatedRoute: ActivatedRoute
  ) {}
}
