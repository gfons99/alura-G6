import java.util.Scanner;

public class C05Evaluaciones {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        double nota = 0;
        double mediaEvaluaciones = 0;
        double contEvaluaciones = 0;

        while (nota != -1) {
            System.out.println("Escriba qué nota le daría a la película \"Matrix\"");
            nota = teclado.nextDouble();
            if (nota != -1) {
                mediaEvaluaciones += nota;
                contEvaluaciones++;
            }
        }
        System.out.println("La media de evaluaciones es: " + (mediaEvaluaciones / contEvaluaciones));
    }
}
