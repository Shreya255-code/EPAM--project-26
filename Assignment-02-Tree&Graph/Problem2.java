import java.util.*;

public class Problem2 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int M = sc.nextInt();
        int D = sc.nextInt();

    
        ArrayList<ArrayList<Integer>> graph = new ArrayList<>();

        for (int i = 0; i <= N; i++) {
            graph.add(new ArrayList<>());
        }
        for (int i = 0; i < M; i++) {
            int u = sc.nextInt();
            int v = sc.nextInt();

            graph.get(u).add(v);
            graph.get(v).add(u);
        }

    
        int[] distance = new int[N + 1];
        Arrays.fill(distance, -1);

    
        Queue<Integer> queue = new LinkedList<>();


        queue.offer(1);
        distance[1] = 0;

        while (!queue.isEmpty()) {

            int current = queue.poll();

            for (int neighbor : graph.get(current)) {

                if (distance[neighbor] == -1) {

                    distance[neighbor] = distance[current] + 1;
                    queue.offer(neighbor);

                }
            }
        }

    
        int count = 0;

        for (int i = 1; i <= N; i++) {

            if (distance[i] != -1 && distance[i] <= D) {
                count++;
            }

        }

        System.out.println(count);

        sc.close();
    }
}
