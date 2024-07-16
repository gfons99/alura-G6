import java.io.IOException;
import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        Scanner lectura = new Scanner(System.in);
        ConsultaPelicula consulta = new ConsultaPelicula();
        System.out.println("Escriba el número de la película de Star Wars a consultar:");

        try {
            int numeroDePelicula = lectura.nextInt();
            Pelicula pelicula = consulta.buscaPelicula(numeroDePelicula);
            System.out.println(consulta);
            GeneradorDeArchivo generador = new GeneradorDeArchivo();
            generador.guardarJson(pelicula);
        }
        catch (NumberFormatException e) {
            System.out.println("Número de película no encontrado: " + e.getMessage());
        }
        catch(RuntimeException | IOException e) {
            System.out.println(e.getMessage());
            System.out.println("Finalizando la aplicación.");
        }
    }
}
