export default interface Intent {
  id: string;
  name: string;
  description: string;
  trainingData: {
    expressionCount: number;
    expressions: {
      id: string;
      text: string;
    }[];
  };
  reply: {
    id: string;
    text: string;
  };
}
