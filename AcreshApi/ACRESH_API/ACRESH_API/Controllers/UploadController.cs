using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ACRESH_API.Controllers
{
    public class UploadController : BaseController
    {
        [HttpPost("avatarImg"),DisableRequestSizeLimit]
        public async Task<ActionResult> UploadAvPic()
        {
            await CreateTestFileAsync();
            if (!this.Request.Form.Files.Any()) return BadRequest(new { reason = "no-file" });
            var myFile = this.Request.Form.Files[0];
            if (myFile.Length > 100000) return BadRequest(new { reason = "File exceeds 100kb" });
            var filePath = Path.Combine("Resourses", myFile.FileName);

            using (var str = new FileStream(filePath, FileMode.Create))
            {
                await myFile.CopyToAsync(str);
            }
            return Ok(new { bdPath = filePath });
        }

        private async Task CreateTestFileAsync()
        {
            var filePath = System.IO.Path.Combine(System.IO.Directory.GetCurrentDirectory(), "Resourses", "test.txt");
            using (var str = new System.IO.FileStream(filePath, System.IO.FileMode.OpenOrCreate))
            {
                await str.WriteAsync(System.Text.Encoding.UTF8.GetBytes("testvam"));
            }
        }

    }
}