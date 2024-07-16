package com.aluracursos.screenmatch.principal;

import com.aluracursos.screenmatch.exceptions.ErrorEnConversionDeDuracionException;
import com.aluracursos.screenmatch.modelos.Titulo;
import com.aluracursos.screenmatch.modelos.TituloOmdb;
import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.FileWriter;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class PrincipalConBusqueda {
    public static void main(String[] args) throws IOException, InterruptedException {
        Scanner lectura = new Scanner(System.in);
        List<Titulo> titulos = new ArrayList<>();
        // Se modificó el patrón builder para que funcione aunque los parámetros del record estén en minúsculas.
        Gson gson = new GsonBuilder()
                .setFieldNamingPolicy(FieldNamingPolicy.UPPER_CAMEL_CASE)
                .setPrettyPrinting()
                .create();

        while (true) {
            System.out.println("Escriba el nombre de una película:");
            String busqueda = lectura.nextLine();

            if(busqueda.equalsIgnoreCase("salir")) {
                break;
            }

            String direccion = "http://www.omdbapi.com/?t=" + busqueda.replace(" ", "+") + "&apikey=2e04f5b8";

            try {
                HttpClient client = HttpClient.newHttpClient();
                HttpRequest request = HttpRequest.newBuilder()
                        .uri(URI.create(direccion))
                        .build();
                HttpResponse<String> response = client
                        .send(request, HttpResponse.BodyHandlers.ofString());

                String json = response.body();
                System.out.println(json);

                TituloOmdb tituloOmdb = gson.fromJson(json, TituloOmdb.class);
                System.out.println(tituloOmdb);

                // Ocurre un error con la película "bichos"
                Titulo titulo = new Titulo(tituloOmdb);
                System.out.println(titulo);

                titulos.add(titulo);

            } catch (NumberFormatException e) {
                System.out.println("Ocurrió un error: " + e.getMessage());
            } catch (IllegalArgumentException e) {
                System.out.println("Error en la URI. Verifique la dirección.");
            } catch (ErrorEnConversionDeDuracionException e) {
                System.out.println(e.getMessage());
            }
            System.out.println(titulos);
            FileWriter escritura = new FileWriter("peliculas.txt");

            escritura.write(gson.toJson(titulos));
            escritura.close();

            System.out.println("Finalizó la ejecución del programa.");
        }
    }
}
