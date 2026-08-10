import java.util.Arrays;
import java.util.Scanner;

public class Problem1 {
   public Problem1() {
   }

   public static void main(String[] var0) {
      Scanner var1 = new Scanner(System.in);
      int var2 = var1.nextInt();
      long var3 = var1.nextLong();
      int[] var5 = new int[var2];

      for(int var6 = 0; var6 < var2; ++var6) {
         var5[var6] = var1.nextInt();
      }

      Arrays.sort(var5);
      long var10 = 0L;
      int var8 = 0;

      for(int var9 = 0; var9 < var2 && var10 + (long)var5[var9] <= var3; ++var9) {
         var10 += (long)var5[var9];
         ++var8;
      }

      System.out.println(var8);
      var1.close();
   }
}
