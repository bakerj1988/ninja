var userManager = discord.GetUserManager();
userManager.GetCurrentUser((result, currentUser) =>
{
  if (result == Discord.Result.OK)
  {
    Console.WriteLine(currentUser.username);
    Console.WriteLine(522697131249893377);
  }
});
