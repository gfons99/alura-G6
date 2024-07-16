package com.aluracursos.screenmatch.principal;

import com.aluracursos.screenmatch.calculos.CalculadoraDeTiempo;
import com.aluracursos.screenmatch.calculos.FiltroRecomendacion;
import com.aluracursos.screenmatch.modelos.Episodio;
import com.aluracursos.screenmatch.modelos.Pelicula;
import com.aluracursos.screenmatch.modelos.Serie;

import java.util.ArrayList;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Principal {
    public static void main(String[] args) {
        Pelicula miPelicula = new Pelicula();
        miPelicula.setNombre("Encanto");
        miPelicula.setFechaDelanzamiento(2024,10,25);
        miPelicula.setDuracionEnMinutos(120);
        miPelicula.setIncluidaEnElPlan(true);

        miPelicula.mostrarFichaTecnica();

        Pelicula otraPelicula = new Pelicula("Matrix",1999,05,21,120,true);

        otraPelicula.mostrarFichaTecnica();

        Serie casaDragon = new Serie("La casa del dragon",2022,12,01,0,false);
        casaDragon.setTemporadas(1);
        casaDragon.setMinutosPorEpisodio(50);
        casaDragon.setEpisodiosPorTemporada(10);

        casaDragon.mostrarFichaTecnica();

        System.out.println("\n****** Calculadora ******");
        CalculadoraDeTiempo calculadora = new CalculadoraDeTiempo();
        calculadora.incluye(miPelicula);
        calculadora.incluye(otraPelicula);
        calculadora.incluye(casaDragon);
        System.out.println("Tiempo total necesario: " + calculadora.getTiempoTotal() + " [minutos]");

        FiltroRecomendacion filtroRecomendacion = new FiltroRecomendacion();
        filtroRecomendacion.filtra(miPelicula);

        Episodio episodio = new Episodio();
        episodio.setNombre("La casa de las brujas");
        episodio.setSerie(casaDragon);
        episodio.setTotalVisualizaciones(145);
        filtroRecomendacion.filtra(episodio);

        Pelicula peliculaDeBruno = new Pelicula();
        peliculaDeBruno.setNombre("El señor de los anillos");
        peliculaDeBruno.setDuracionEnMinutos(180);
        peliculaDeBruno.setFechaDelanzamiento(2001,12,12);

        ArrayList<Pelicula> listaDePeliculas = new ArrayList<>();
        listaDePeliculas.add(miPelicula);
        listaDePeliculas.add(otraPelicula);
        listaDePeliculas.add(peliculaDeBruno);

        System.out.println("Tamaño de la lista: " + listaDePeliculas.size());
        System.out.println("La 1ra película es: " + listaDePeliculas.get(0).getNombre());
        System.out.println(listaDePeliculas);


    }
}