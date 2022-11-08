export async function resolveFunction(): Promise<string> {
  return "success";
}

export async function rejectFunction(): Promise<string> {
  throw new Error("reject")
}
