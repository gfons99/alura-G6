import java.util.Scanner;

public class D04Banco {
    public static void main(String[] args) {
//        String nombre = "Tony Stark";
//        String tipoDeCuenta = "Corriente";
//        double saldo = 1599.99;
//
//        System.out.println("****************************************************************\n");
//        System.out.println("Nombre del cliente: " + nombre);
//        System.out.println("Tipo de cuenta: " + tipoDeCuenta);
//        System.out.println("Saldo disponible: $" + saldo + " MXN");

        Cliente cliente = new Cliente();

        String menu = """
                ****************************************************************
                ESCRIBA EL NÚMERO DE LA OPCIÓN DESEADA:
                1. Consultar saldo
                2. Retirar
                3. Depositar
                4. Salir
                ****************************************************************
                """;

        int opcion = 0;
        Scanner teclado = new Scanner(System.in);
        while (opcion != 4) {
            System.out.println(menu);
            opcion = teclado.nextInt();

            switch (opcion) {
                case 1:
                    System.out.println("Saldo disponible: $" + cliente.getSaldo() + " MXN");
                    break;
                case 2:
                    System.out.println("Ingrese la cantidad a retirar:");
                    double retiro = teclado.nextDouble();
                    if (retiro > cliente.getSaldo()) {
                        System.out.println("Saldo insuficiente.");
                    }
                    else {
                        cliente.retirar(retiro);
                        System.out.println("Saldo actualizado: $" + cliente.getSaldo() + " MXN");
                    }
                    break;
                case 3:
                    System.out.println("Ingrese la cantidad a depositar:");
                    double deposito = teclado.nextDouble();
                    cliente.depositar(deposito);
                    System.out.println("Saldo actualizado: $" + cliente.getSaldo() + " MXN");
                    break;
                case 4:
                    System.out.println("Gracias. Buen día.");
                    break;
                default:
                    System.out.println("Opción inválida");
            }
        }

    }
}

class Cliente {
    // Atributos
    private String nombre;
    private String tipoDeCuenta;
    private double saldo;

    // Constructor
    public Cliente() {
        nombre = "Tony Stark";
        tipoDeCuenta = "Corriente";
        saldo = 1599.99;
    }

    // Métodos
    public String getNombre() {
        return nombre;
    }
    public String getTipoDeCuenta() {
        return tipoDeCuenta;
    }
    public double getSaldo() {
        return saldo;
    }
    public void  retirar(double retiro) {
        saldo -= retiro;
    }
    public void depositar(double deposito) {
        saldo += deposito;
    }
}