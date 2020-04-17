using Acresh.Services.Services.Contracts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ACRESH_API.Controllers
{
    public class TrafficController : BaseController
    {
        private readonly IUserDataService uds;

        public TrafficController(IUserDataService uds)
        {
            this.uds = uds;
        }

        [HttpPost("avatarImg"), DisableRequestSizeLimit]
        public async Task<ActionResult> Upload()
        {
            //await CreateTestFileAsync();
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

        [Authorize]
        [HttpGet("profile-data")]
        public async Task<ActionResult> DownloadProfileData()
        {
            var memory = new MemoryStream();
            string userData = await uds.GetUserDataStringAsync(UserId);
            var data = Encoding.UTF8.GetBytes(userData);
            memory.Write(data, 0, data.Length);
            memory.Position = 0;
            return File(memory, "application/octet-stream", "user-info.txt");
        }


        [Authorize]
        [HttpGet("file")]
        public async Task<ActionResult> Download(string file)
        {
            var path = Path.Combine(Directory.GetCurrentDirectory(), "Resourses", file);
            if (System.IO.File.Exists(path))
            {
                var memory = new MemoryStream();
                using (var stream = new FileStream(path, FileMode.Open))
                {
                    await stream.CopyToAsync(memory);
                }
                memory.Position = 0;
                return File(memory, GetContentType(path), file);
            }

            return BadRequest(new { reason = "file not found" });
        }

        private string GetContentType(string path)
        {
            var provider = new FileExtensionContentTypeProvider();
            string contentType;
            if (!provider.TryGetContentType(path, out contentType))
            {
                contentType = "application/octet-stream";
            }
            return contentType;
        }

    }
}