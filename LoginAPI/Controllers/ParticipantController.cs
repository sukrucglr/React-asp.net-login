#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
//using LogensAPI.Models;
using LogensAPI.Models;

namespace LogensAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ParticipantController : ControllerBase
    {
        private readonly LoginDbContext _context;

        public ParticipantController(LoginDbContext context)
        {
            _context = context;
        }

        // GET: api/Participant
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Participant>>> GetParticipants()
        {
            return await _context.participant.ToListAsync();
        }

        // GET: api/Participant/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Participant>> GetParticipant(int id)
        {
            var participant = await _context.participant.FindAsync(id);

            if (participant == null)
            {
                return NotFound();
            }

            return participant;
        }

        // PUT: api/Participant/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutParticipant(int id, ParticipantRestult _participantResult)
        {
            if (id != _participantResult.ParticipantId)
            {
                return BadRequest();
            }

            // get all current details of the record, then update with Logens results
            Participant participant = _context.participant.Find(id);


            _context.Entry(participant).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ParticipantExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        // POST: api/Participant

        [HttpPost]
        public async Task<ActionResult<Participant>> PostParticipant(Participant participant)
        {
            Participant participant1 = _context.participant
                             .Where(x => x.email == participant.email
                             //&& x.password == participant.password


                             )
                            .FirstOrDefault();
            var temp = participant1;


            if (temp == null)
            {
                _context.participant.Add(participant);
                await _context.SaveChangesAsync();
            }
            else
            {
                participant = temp;
                return Ok(participant);
                //const bool V = true;

            }
                

            return Ok(participant);
        }
        //      ÇALIŞIYO BU DOKUNMA!
        //public async Task<ActionResult<Participant>> PostParticipant(Participant participant)
        //{
        //    Participant participant1 = _context.participant
        //                     .Where(x => x.email == participant.email 
        //                     //&& x.password == participant.password


        //                     )
        //                    .FirstOrDefault();
        //    var temp = participant1;

        //    if (temp == null)
        //    {
        //        _context.participant.Add(participant);
        //        await _context.SaveChangesAsync();
        //    }
        //    else
        //        participant = temp;

        //    return Ok(participant);
        //}

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteParticipant(int id)
        {
            var participant = await _context.participant.FindAsync(id);
            if (participant == null)
            {
                return NotFound();
            }

            _context.participant.Remove(participant);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ParticipantExists(int id)
        {
            return _context.participant.Any(e => e.ParticipantId == id);
        }
    }
}
