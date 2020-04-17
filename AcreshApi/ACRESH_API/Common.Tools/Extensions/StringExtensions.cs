using System;
using System.Text;

namespace Common.Tools.Extensions
{
    public static class StringExtensions
    {
        public static byte[] ToByteArray(this String str)
        {
            return Encoding.UTF8.GetBytes(str);
        }

    }
}