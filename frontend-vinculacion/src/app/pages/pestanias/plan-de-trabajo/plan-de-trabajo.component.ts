import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlanDeTrabajo } from '../../../models/pestanias/plan-de-trabajo';
import { PlanDeTrabajoService } from '../../../service/pestanias/plan-de-trabajo/plan-de-trabajo.service';

@Component({
  selector: 'app-plan-de-trabajo',
  templateUrl: './plan-de-trabajo.component.html',
  styleUrls: ['./plan-de-trabajo.component.css'],
})
export class PlanDeTrabajoComponent implements OnInit {
  constructor(
    private planDeTrabajoService: PlanDeTrabajoService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  currentEntity: PlanDeTrabajo = {
    planTrabajoId: 0,
    descripcionGe: '',
    objetivoPro: '',
    analisisSi: '',
    justificacion: '',
    numObjetivos: '',
    nombreOb: '',
    objetivoOb: '',
    indicadorOb: '',
    metodosOb: '',
    numCriterios: '',
    nombreCriterios: '',
    criterioCriterios: '',
    objetivosEs: '',
    indicadoresVe: '',
    mediosVe: '',
    conclusiones: '',
    recomendaciones: '',
  };

  planTrabajoForm = this.fb.group({
    descripcionGe: [this.currentEntity.descripcionGe, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    objetivoPro: [this.currentEntity.objetivoPro, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    analisisSi: [this.currentEntity.analisisSi, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    justificacion: [this.currentEntity.justificacion, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    numObjetivos: [this.currentEntity.numObjetivos],
    nombreOb: [this.currentEntity.nombreOb, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    objetivoOb: [this.currentEntity.objetivoOb, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    indicadorOb: [this.currentEntity.indicadorOb, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    metodosOb: [this.currentEntity.metodosOb, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    numCriterios: [this.currentEntity.numCriterios],
    nombreCriterios: [this.currentEntity.nombreCriterios, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    criterioCriterios: [this.currentEntity.criterioCriterios, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    objetivosEs: [this.currentEntity.objetivosEs, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    indicadoresVe: [this.currentEntity.indicadoresVe, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    mediosVe: [this.currentEntity.mediosVe, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    conclusiones: [this.currentEntity.conclusiones, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
    recomendaciones: [this.currentEntity.recomendaciones, [Validators.required, Validators.pattern("[ñáéíóúA-Za-z ]+")]],
  });

  get descripcionGe() {
    return this.planTrabajoForm.get('descripcionGe');
  }
  get objetivoPro() {
    return this.planTrabajoForm.get('objetivoPro');
  }
  get analisisSi() {
    return this.planTrabajoForm.get('analisisSi');
  }
  get justificacion() {
    return this.planTrabajoForm.get('justificacion');
  }
  get numObjetivos() {
    return this.planTrabajoForm.get('numObjetivos');
  }
  get nombreOb() {
    return this.planTrabajoForm.get('nombreOb');
  }
  get objetivoOb() {
    return this.planTrabajoForm.get('objetivoOb');
  }
  get indicadorOb() {
    return this.planTrabajoForm.get('indicadorOb');
  }
  get metodosOb() {
    return this.planTrabajoForm.get('metodosOb');
  }
  get numCriterios() {
    return this.planTrabajoForm.get('numCriterios');
  }
  get nombreCriterios() {
    return this.planTrabajoForm.get('nombreCriterios');
  }
  get criterioCriterios() {
    return this.planTrabajoForm.get('criterioCriterios');
  }
  get objetivosEs() {
    return this.planTrabajoForm.get('objetivosEs');
  }
  get indicadoresVe() {
    return this.planTrabajoForm.get('indicadoresVe');
  }
  get mediosVe() {
    return this.planTrabajoForm.get('mediosVe');
  }
  get conclusiones() {
    return this.planTrabajoForm.get('conclusiones');
  }
  get recomendaciones() {
    return this.planTrabajoForm.get('recomendaciones');
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.findById(parseInt(params.get('id')!));
      }
    });
  }

  onSubmit(): void {
    console.table(this.currentEntity);
    this.planDeTrabajoService.save(this.planTrabajoForm.value as PlanDeTrabajo).subscribe(() => {
      this.currentEntity = {
        planTrabajoId: 0,
        descripcionGe: '',
        objetivoPro: '',
        analisisSi: '',
        justificacion: '',
        numObjetivos: '',
        nombreOb: '',
        objetivoOb: '',
        indicadorOb: '',
        metodosOb: '',
        numCriterios: '',
        nombreCriterios: '',
        criterioCriterios: '',
        objetivosEs: '',
        indicadoresVe: '',
        mediosVe: '',
        conclusiones: '',
        recomendaciones: '',
      };
    });
  }

  findById(id: number): void {
    this.planDeTrabajoService.findById(id).subscribe((response) => {
      this.currentEntity = response;
    });
  }
}
