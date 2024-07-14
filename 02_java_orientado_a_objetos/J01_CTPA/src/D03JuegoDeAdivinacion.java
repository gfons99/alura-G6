import java.util.Random;
import java.util.Scanner;

public class D03JuegoDeAdivinacion {


    public static void main(String[] args) {
        int numeroAleatorio = new Random().nextInt(100);
        int numeroElegido = 0;
        int maxIntentos = 5;
        int contIntentos = 0;
        boolean adivinado = false;
        Scanner teclado = new Scanner(System.in);

        System.out.println("###### Juego de adivinación ######");
        System.out.println("Número aleatorio: " + numeroAleatorio);

        while(adivinado == false && contIntentos < maxIntentos) {
            contIntentos += 1;
            System.out.println("Ingrese un número del 0 al 100:");
            numeroElegido = teclado.nextInt();
            if (numeroElegido == numeroAleatorio) {
                adivinado = true;
                System.out.println("¡Felicidades, adivinaste!");
            }
            else {
                if (numeroElegido < numeroAleatorio) {
                    System.out.println("El número elegido es menor al número aleatorio.");
                }
                else {
                    System.out.println("El número elegido es mayor al número aleatorio.");
                }
            }
        }
        // Fin del juego
        System.out.println("El número aleatorio era: " + numeroAleatorio);
        if (adivinado == false) {
            System.out.println("Fallaste, reinicia el juego para volver a intentar.");
        }
    }
}
