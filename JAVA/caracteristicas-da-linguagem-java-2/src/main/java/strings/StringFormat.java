package strings;

public class StringFormat {

  public static void main(String[] args) {

    var nome = "André";
    var sobreNome = "Gomes";
    final var nomeCompleto = nome + sobreNome;

    //System.out.println(nome);
   // System.out.println("A B C D E F G".toCharArray());
    System.out.println("Aula de Java".split("-"));
    //System.out.println("Aula".concat("de Java"));
    //System.out.println("1234 asda qw".replaceAll("[0-9]","#"));

    /*System.out.println("Nome do cliente : " + nome);
    System.out.println("Nome completo do cliente : " + nomeCompleto);
    final var mensagem = String.format("O cliente %s possui sobre nome %s ", nome, sobreNome);
    System.out.println(mensagem);

    System.out.println(String.format("Numero %.2f ", 1.2375d));*/
  }

}
