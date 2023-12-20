export abstract class ButtonLikeAbstraction {
  loading: boolean | undefined;
  disabled: boolean | undefined;
}

export type ButtonType = "primary" | "secondary" | "danger" | "unstyled";
