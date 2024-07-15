package com.aluracursos.screenmatch.calculos;

public class FiltroRecomendacion {
    public void filtra(Clasificacion clasificacion) {
        if (clasificacion.getClasificacionEstrellas() >= 4) {
            System.out.println("Muy bien evaluado");
        }
        else if (clasificacion.getClasificacionEstrellas() >= 2) {
            System.out.println("Popular en el momento");
        }
        else {
            System.out.println("Recomendado para después");
        }
    }
}
