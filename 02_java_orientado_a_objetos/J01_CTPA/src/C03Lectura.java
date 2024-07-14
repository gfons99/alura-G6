import java.util.Scanner;

public class C03Lectura {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.println("Escriba el nombre de su película favorita:");
        String pelicula = teclado.nextLine();

        System.out.println("Escriba la fecha de lanzamiento:");
        int fechaDeLanzamiento = teclado.nextInt();

        System.out.println("Por último indique la nota que le da a esa película:");
        double nota = teclado.nextDouble();

        System.out.println(pelicula);
        System.out.println(fechaDeLanzamiento);
        System.out.println(nota);

        teclado.close();
    }
}
