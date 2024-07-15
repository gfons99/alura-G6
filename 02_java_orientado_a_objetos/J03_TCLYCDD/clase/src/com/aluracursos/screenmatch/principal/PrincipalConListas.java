package com.aluracursos.screenmatch.principal;

import com.aluracursos.screenmatch.modelos.Pelicula;
import com.aluracursos.screenmatch.modelos.Serie;
import com.aluracursos.screenmatch.modelos.Titulo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class PrincipalConListas {
    public static void main(String[] args) {
        Pelicula miPelicula = new Pelicula("Encanto",2004,10,25,120,true);
        miPelicula.evaluar(7);
        Pelicula otraPelicula = new Pelicula("Matrix",1999,05,21,120,true);
        otraPelicula.evaluar(10);
        Serie casaDragon = new Serie("La casa del dragon",2022,12,01,0,false);
        casaDragon.evaluar(8);
        Pelicula peliculaDeBruno = new Pelicula("El señor de los anillos",2001,12,12,120,true);
        peliculaDeBruno.evaluar(10);

        ArrayList<Titulo> listaDeTitulos = new ArrayList<>();
        listaDeTitulos.add(miPelicula);
        listaDeTitulos.add(otraPelicula);
        listaDeTitulos.add(casaDragon);
        listaDeTitulos.add(peliculaDeBruno);

        for (Titulo item: listaDeTitulos) {
            System.out.println(item.getNombre());
            if (item instanceof Pelicula) {
                Pelicula pelicula = (Pelicula) item;
                System.out.println(pelicula.getClasificacionEstrellas());
            }
        }

        ArrayList<String> listaDeArtistas = new ArrayList<>();
        listaDeArtistas.add("Penélope Cruz");
        listaDeArtistas.add("Antonio Banderas");
        listaDeArtistas.add("Ricardo Darin");

        System.out.println("Lista no ordenada: " + listaDeArtistas);
        Collections.sort(listaDeArtistas);
        System.out.println("Lista ordenada: " + listaDeArtistas);

        Collections.sort(listaDeTitulos);
        System.out.println("Lista de títulos, ordenada por nombre: " + listaDeTitulos);

        listaDeTitulos.sort(Comparator.comparing(Titulo::getFechaDelanzamiento));
        System.out.println("Lista de títulos, ordenada por fecha: " + listaDeTitulos);
    }
}
