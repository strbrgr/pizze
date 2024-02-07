// @ts-expect-error fix import type
import type { ContainerProps } from "@radix-ui/themes/dist/esm/components/container";
import { cn } from "../../../core/helpers/style.utils";

export function Container(props: ContainerProps) {
  const { className, ...other } = props;
  return (
    <section
      className={cn("w-11/12 pt-10 mx-auto", className)}
      {...other}
    ></section>
  );
}
