export const load = async ({ cookies }) => {
    cookies.delete("hotel-user", { path: "/" });
  };