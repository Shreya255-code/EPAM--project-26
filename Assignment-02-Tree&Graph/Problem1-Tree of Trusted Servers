import java.util.ArrayList;
import java.util.Scanner;

public class Problem1 {
   static ArrayList<ArrayList<Integer>> tree = new ArrayList();
   static int[] key;
   static int K;
   static int trustedCount = 0;

   public Problem1() {
   }

   static void dfs(int var0, int var1, int var2) {
      var2 ^= key[var0];
      if (var2 >= K) {
         ++trustedCount;
      }

      for(int var4 : (ArrayList)tree.get(var0)) {
         if (var4 != var1) {
            dfs(var4, var0, var2);
         }
      }

   }

   public static void main(String[] var0) {
      Scanner var1 = new Scanner(System.in);
      int var2 = var1.nextInt();
      K = var1.nextInt();
      key = new int[var2 + 1];

      for(int var3 = 1; var3 <= var2; ++var3) {
         key[var3] = var1.nextInt();
      }

      for(int var6 = 0; var6 <= var2; ++var6) {
         tree.add(new ArrayList());
      }

      for(int var7 = 0; var7 < var2 - 1; ++var7) {
         int var4 = var1.nextInt();
         int var5 = var1.nextInt();
         ((ArrayList)tree.get(var4)).add(var5);
         ((ArrayList)tree.get(var5)).add(var4);
      }

      dfs(1, 0, 0);
      System.out.println(trustedCount);
      var1.close();
   }
}
