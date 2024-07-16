package com.aluracursos.screenmatch.modelos;

import com.aluracursos.screenmatch.calculos.Clasificacion;

import java.util.Calendar;

public class Pelicula extends Titulo implements Clasificacion {
    private String director;

    // Constructores
    public Pelicula() {

    }
    public Pelicula(String nombre, int anio, int mes, int dia, int duracionEnMinutos, boolean incluidaEnElPlan) {
        super(nombre, anio, mes, dia, duracionEnMinutos, incluidaEnElPlan);
    }

    // Getters & Setters
    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    // Methods
    @Override
    public int getClasificacionEstrellas() {
        return (int) (getPromedioDeEvaluaciones() / 2);
    }

    @Override
    public String toString() {
        return "Película: " + this.getNombre() + " (" + getFechaDelanzamiento() + ")";
    }
}
