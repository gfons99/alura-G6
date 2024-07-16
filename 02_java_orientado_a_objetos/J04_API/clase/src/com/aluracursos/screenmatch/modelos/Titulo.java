package com.aluracursos.screenmatch.modelos;

import com.aluracursos.screenmatch.exceptions.ErrorEnConversionDeDuracionException;
import com.google.gson.annotations.SerializedName;

import java.util.Calendar;

public class Titulo implements Comparable<Titulo> {
    // Atributos
    @SerializedName("Title")
    private String nombre;

    @SerializedName("Released")
    private String fechaDelanzamientoString;

    private Calendar fechaDelanzamiento;

    private int duracionEnMinutos;
    private boolean incluidaEnElPlan;

    private int numeroDeEvaluaciones;
    private double sumaDeEvaluaciones;
    private double promedioDeEvaluaciones;

    // Constructor
    public Titulo() {
        fechaDelanzamiento = Calendar.getInstance();
    }

    public Titulo(String nombre, int anio, int mes, int dia, int duracionEnMinutos, boolean incluidaEnElPlan) {
        this.nombre = nombre;
        fechaDelanzamiento = Calendar.getInstance();
        this.fechaDelanzamiento.set(anio,mes,dia);
        this.duracionEnMinutos = duracionEnMinutos;
        this.incluidaEnElPlan = incluidaEnElPlan;
    }

    public Titulo(TituloOmdb tituloOmdb) {
        this.nombre = tituloOmdb.title();
        this.fechaDelanzamientoString = tituloOmdb.released();
        if (tituloOmdb.runtime().contains("N/A")){
            throw new ErrorEnConversionDeDuracionException("No se pudo convertir la duración, porque contiene N/A");
        }
        this.duracionEnMinutos = Integer.valueOf(tituloOmdb.runtime().substring(0,3).replace(" ",""));
    }

    // Métodos get, set
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getFechaDelanzamiento() {
        String aa = String.valueOf(fechaDelanzamiento.get(Calendar.YEAR));
        String mm = String.valueOf(fechaDelanzamiento.get(Calendar.MONTH));
        String dd = String.valueOf(fechaDelanzamiento.get(Calendar.DATE));
        return (aa + "/" + mm + "/" + dd);
    }

    public void setFechaDelanzamiento(int anio, int mes, int dia) {
        this.fechaDelanzamiento.set(anio,mes,dia);
    }

    public int getDuracionEnMinutos() {
        return duracionEnMinutos;
    }

    public void setDuracionEnMinutos(int duracionEnMinutos) {
        this.duracionEnMinutos = duracionEnMinutos;
    }

    public boolean getIncluidaEnElPlan() {
        return incluidaEnElPlan;
    }

    public void setIncluidaEnElPlan(boolean incluidaEnElPlan) {
        this.incluidaEnElPlan = incluidaEnElPlan;
    }

    public double getPromedioDeEvaluaciones() {
        return promedioDeEvaluaciones;
    }

    // Métodos
    public void mostrarFichaTecnica() {
        System.out.println("\nNombre de la película: " + nombre);
        System.out.println("Fecha de lanzamiento: " + fechaDelanzamiento.get(Calendar.YEAR) + "/" + fechaDelanzamiento.get(Calendar.MONTH) + "/" + fechaDelanzamiento.get(Calendar.DATE));
        System.out.println("Duración en minutos: " + getDuracionEnMinutos());
        System.out.println("¿Está incluída en el plan?: " + incluidaEnElPlan);
        System.out.println("Evaluación: " + promedioDeEvaluaciones);
    }
    public void evaluar(double nota) {
        numeroDeEvaluaciones += 1;
        sumaDeEvaluaciones += nota;
        promedioDeEvaluaciones = sumaDeEvaluaciones / numeroDeEvaluaciones;
    }

    @Override
    public int compareTo(Titulo otroTitulo) {
        return this.getNombre().compareTo(otroTitulo.getNombre());
    }

    @Override
    public String toString() {
        return "Titulo{" +
                "nombre='" + nombre + '\'' +
                ", fechaDelanzamientoString=" + fechaDelanzamientoString +
                ", duracionEnMinutos=" + duracionEnMinutos +
                '}';
    }
}
