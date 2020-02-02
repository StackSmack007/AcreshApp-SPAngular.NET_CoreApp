public class UseDataTakenDTOout
{
    public UseDataTakenDTOout() { }
    public UseDataTakenDTOout(bool userNameTaken, bool emailTaken)
    {
        this.userNameTaken = userNameTaken;
        this.emailTaken = emailTaken;
    }

    public bool userNameTaken { get; set; }
    public bool emailTaken { get; set; }
}