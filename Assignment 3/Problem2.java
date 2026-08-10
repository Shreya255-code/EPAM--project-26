import java.util.Scanner;

public class Problem2 {
   public Problem2() {
   }

   public static void main(String[] var0) {
      Scanner var1 = new Scanner(System.in);
      int var2 = var1.nextInt();
      int[] var3 = new int[var2];

      for(int var4 = 0; var4 < var2; ++var4) {
         var3[var4] = var1.nextInt();
      }

      if (var2 == 1) {
         System.out.println(var3[0]);
         var1.close();
      } else {
         int[] var8 = new int[var2];
         var8[0] = var3[0];
         var8[1] = Math.max(var3[0], var3[1]);

         for(int var5 = 2; var5 < var2; ++var5) {
            int var6 = var8[var5 - 1];
            int var7 = var3[var5] + var8[var5 - 2];
            var8[var5] = Math.max(var6, var7);
         }

         System.out.println(var8[var2 - 1]);
         var1.close();
      }
   }
}
