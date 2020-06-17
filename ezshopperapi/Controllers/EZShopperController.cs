using EZShopper.Models;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EZShopper.Controllers
{
    [ApiController] // among other things, this annotaion allows us to skip validation code in each controller method (see required annotations in models), 400's are automatically triggered using the ApiController annotation
    [Route("[controller]")]
    public class EZShopperController : Controller
    {
        // local: http://localhost:5247/ezshopper/user?userId=1
        // nas: http://192.168.1.250:32781/ezshopper/user/userId=1

        //DataMapper _dataMapper = new DataMapper();

        EZShopperContext _context;

        public EZShopperController(EZShopperContext context)
        {
            _context = context;
        }

        [HttpGet("login")]
        public ActionResult GetLogin([FromQuery] string username, [FromQuery] string password)
        {
            return Ok(_context.User.Where(u => u.Username == username && u.Password == password).First());
        }

        [HttpGet("user")]
        public ActionResult GetUser([FromQuery] int userId)
        {
            return Ok(_context.User.Where(u => u.Id == userId).First());
        }

        [HttpGet("meals")]
        public ActionResult GetMeals([FromQuery] int userId)
        {
            return Ok(_context.Meal.Where(m => m.UserId == userId));
        }

        //[HttpGet("lists")]
        //public IActionResult GetListsByUser([FromQuery] int userId)
        //{
        //    return Ok(_context.Master.Where(m => m.UserId == userId));
        //}

        //[HttpGet("items")]
        //public IActionResult GetItemsByUser([FromQuery] int userId)
        //{
        //    return Ok(_context.Item.Where(i => i.UserId == userId));
        //}

        //[HttpGet("list")]
        //public IActionResult GetList([FromQuery] int listId)
        //{
        //    Master master = _context.Master.Where(m => m.Id == listId).SingleOrDefault();
        //    if (master == null)
        //    {
        //        return BadRequest();
        //    }
        //    IQueryable<Detail> details = _context.Detail.Include("Master").Include("Category").Include("Item").Where(d => d.MasterId == listId);
        //    return Ok(_dataMapper.MapListItems(master, details));  // this helper method will turn the details collection into something usable for the client
        //}

        //[HttpPut("addUser")]
        //public IActionResult AddUser([FromHeader] User user)
        //{
        //    if (user == null || user.Id > 0)
        //    {
        //        return BadRequest();
        //    }

        //    _context.User.Add(user);
        //    _context.SaveChanges();

        //    return Ok(user);
        //}

        //[HttpPut("updateUser")]
        //public IActionResult UpdateUser([FromHeader] User user)
        //{
        //    if (user == null)
        //    {
        //        return BadRequest();
        //    }
        //    if (_context.User.AsNoTracking().SingleOrDefault(u => u.Id == user.Id) == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.User.Update(user);
        //    _context.SaveChanges();

        //    return Ok(user);
        //}

        //[HttpPut("addList")]
        //public IActionResult AddList([FromHeader] User user)
        //{
        //    if (user == null)
        //    {
        //        return BadRequest();
        //    }

        //    Master master = new Master
        //    {
        //        UserId = user.Id
        //    };
        //    _context.Master.Add(master);

        //    Category category = new Category();
        //    _context.Category.Add(category);

        //    Item item = new Item
        //    {
        //        UnitOfMeasure = "oz",
        //        Quantity = 1,
        //        UserId = master.UserId
        //    };
        //    _context.Item.Add(item);

        //    _context.Detail.Add(new Detail
        //    {
        //        MasterId = master.Id,
        //        CategoryId = category.Id,
        //        ItemId = item.Id,
        //        CategorySequence = 1,
        //        ItemSequence = 1
        //    });

        //    _context.SaveChanges();

        //    user.LastListId = master.Id;
        //    _context.User.Update(user); // cheating until I find out the best way to get the return value from one dispatch to pass the new id to another dispatch
        //    _context.SaveChanges();

        //    IQueryable<Detail> details = _context.Detail.Include("Master").Include("Category").Include("Item").Where(d => d.MasterId == master.Id);
        //    return Ok(_dataMapper.MapListItems(master, details));  // this helper method will turn the details collection into something usable for the client
        //}

        //[HttpPut("importList")]
        //public IActionResult ImportList([FromHeader] User user, [FromHeader(Name = "list")] DataMapper.ReturnListObject list)
        //{
        //    if (user == null || list == null)
        //    {
        //        return BadRequest();
        //    }

        //    Master newMaster = new Master
        //    {
        //        Name = list.Name,
        //        Description = list.Description,
        //        UserId = user.Id
        //    };
        //    _context.Master.Add(newMaster);
        //    _context.SaveChanges();

        //    foreach (DataMapper.ReturnListCategory category in list.Categories)
        //    {

        //        Category newCategory = new Category
        //        {
        //            Name = category.Name
        //        };
        //        _context.Category.Add(newCategory);
        //        _context.SaveChanges();

        //        foreach (Item item in category.Items)
        //        {

        //            Item newItem = new Item
        //            {
        //                Name = item.Name,
        //                Description = item.Description,
        //                Quantity = item.Quantity,
        //                UnitOfMeasure = item.UnitOfMeasure,
        //                Milligrams = item.Milligrams,
        //                Picture = item.Picture,
        //                Link = item.Link,
        //                IsWorn = item.IsWorn,
        //                IsConsumable = item.IsConsumable,
        //                IsPurchase = item.IsPurchase,
        //                Price = item.Price,
        //                UserId = user.Id
        //            };
        //            _context.Item.Add(newItem);
        //            _context.SaveChanges();

        //            _context.Detail.Add(new Detail
        //            {
        //                MasterId = newMaster.Id,
        //                CategoryId = newCategory.Id,
        //                ItemId = newItem.Id,
        //                CategorySequence = this.GetNextCategorySequence(newMaster.Id),
        //                ItemSequence = this.GetNextItemSequence(newCategory.Id)
        //            });
        //            _context.SaveChanges();
        //        }
        //    }

        //    return Ok(list);
        //}

        //[HttpPut("updateListName")]
        //public IActionResult UpdateListName([FromHeader] Master partial)
        //{
        //    if (partial == null || partial.Id == 0)
        //    {
        //        return BadRequest();
        //    }
        //    Master master = _context.Master.SingleOrDefault(m => m.Id == partial.Id);
        //    if (master == null)
        //    {
        //        return NotFound();
        //    }
        //    master.Name = partial.Name;

        //    _context.Master.Update(master);
        //    _context.SaveChanges();

        //    IQueryable<Detail> details = _context.Detail.Include("Master").Include("Category").Include("Item").Where(d => d.MasterId == master.Id);
        //    return Ok(_dataMapper.MapListItems(master, details));  // this helper method will turn the details collection into something usable for the client
        //}

        //[HttpPut("updateList")]
        //public IActionResult UpdateList([FromHeader] Master master)
        //{
        //    if (master == null)
        //    {
        //        return BadRequest();
        //    }
        //    if (_context.Master.AsNoTracking().SingleOrDefault(m => m.Id == master.Id) == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Master.Update(master);
        //    _context.SaveChanges();

        //    IQueryable<Detail> details = _context.Detail.Include("Master").Include("Category").Include("Item").Where(d => d.MasterId == master.Id);
        //    return Ok(_dataMapper.MapListItems(master, details));  // this helper method will turn the details collection into something usable for the client
        //}

        //[HttpPut("addCategory")]
        //public IActionResult AddCategory([FromHeader(Name = "list")] Master master, [FromHeader] User user)
        //{
        //    if (master == null || user == null)
        //    {
        //        return BadRequest();
        //    }

        //    DataMapper.ReturnListCategory category = new DataMapper.ReturnListCategory
        //    {
        //        Name = "",
        //        Items = new List<Item>()
        //    };
        //    _context.Category.Add(category);
        //    _context.SaveChanges();

        //    //Item item = new Item
        //    //{
        //    //    UnitOfMeasure = "oz",
        //    //    Quantity = 1,
        //    //    UserId = user.Id
        //    //};
        //    //_context.Item.Add(item);
        //    //_context.SaveChanges();

        //    //_context.Detail.Add(new Detail
        //    //{
        //    //    MasterId = master.Id,
        //    //    CategoryId = category.Id,
        //    //    ItemId = item.Id,
        //    //    CategorySequence = this.GetNextCategorySequence(master.Id),
        //    //    ItemSequence = this.GetNextItemSequence(category.Id)
        //    //});
        //    //_context.SaveChanges();

        //    return Ok(category);
        //}

        //[HttpPut("updateCategory")]
        //public IActionResult UpdateCategory([FromHeader] Category category)
        //{
        //    if (category == null)
        //    {
        //        return BadRequest();
        //    }
        //    if (_context.Category.AsNoTracking().SingleOrDefault(c => c.Id == category.Id) == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Category.Update(category);
        //    _context.SaveChanges();

        //    return Ok(category);
        //}

        //[HttpPut("addItem")]
        //public IActionResult AddItem([FromHeader(Name = "list")] Master master, [FromHeader] Category category, [FromHeader] User user)
        //{
        //    if (master == null || category == null || user == null)
        //    {
        //        return BadRequest();
        //    }

        //    Item item = new Item
        //    {
        //        UnitOfMeasure = "oz",
        //        Quantity = 1,
        //        UserId = user.Id
        //    };
        //    _context.Item.Add(item);
        //    _context.SaveChanges();

        //    _context.Detail.Add(new Detail
        //    {
        //        MasterId = master.Id,
        //        CategoryId = category.Id,
        //        ItemId = item.Id,
        //        CategorySequence = this.GetNextCategorySequence(master.Id),
        //        ItemSequence = this.GetNextItemSequence(category.Id)
        //    });
        //    _context.SaveChanges();

        //    return Ok(item);
        //}

        //[HttpPut("updateItem")]
        //public IActionResult UpdateItem([FromHeader] Item item)
        //{
        //    if (item == null)
        //    {
        //        return BadRequest();
        //    }
        //    if (_context.Item.AsNoTracking().SingleOrDefault(i => i.Id == item.Id) == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Item.Update(item);
        //    _context.SaveChanges();

        //    return new NoContentResult();
        //}

        //[HttpDelete("deleteItemFromList")]
        //public IActionResult DeleteItemFromList([FromHeader] Item item, [FromHeader(Name = "list")] Master master)
        //{
        //    if (item.Id == 0 || master.Id == 0)
        //    {
        //        return BadRequest();
        //    }

        //    Detail detail = _context.Detail.SingleOrDefault(d => d.ItemId == item.Id && d.MasterId == master.Id);
        //    if (detail == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Detail.Remove(detail);
        //    _context.SaveChanges();
        //    return Ok();
        //}

        //[HttpDelete("deleteItemFromGear")]
        //public IActionResult DeleteItemFromGear([FromHeader] Item item)
        //{
        //    if (item == null)
        //    {
        //        return BadRequest();
        //    }
        //    if (_context.Item.AsNoTracking().SingleOrDefault(i => i.Id == item.Id) == null)
        //    {
        //        return NotFound();
        //    }

        //    IQueryable<Detail> details = _context.Detail.Where(d => d.ItemId == item.Id);
        //    if (details != null)
        //    {
        //        _context.Detail.RemoveRange(details);
        //    }

        //    _context.Item.Remove(item);
        //    _context.SaveChanges();
        //    return Ok();
        //}

        //[HttpDelete("deleteCategory")]
        //public IActionResult DeleteCategory([FromHeader] Category category)
        //{
        //    if (category == null)
        //    {
        //        return BadRequest();
        //    }
        //    if (_context.Category.AsNoTracking().SingleOrDefault(c => c.Id == category.Id) == null)
        //    {
        //        return NotFound();
        //    }

        //    IQueryable<Detail> details = _context.Detail.Where(d => d.CategoryId == category.Id);
        //    _context.Detail.RemoveRange(details);
        //    _context.SaveChanges();

        //    _context.Category.Remove(category);
        //    _context.SaveChanges();
        //    return Ok();
        //}

        //[HttpDelete("deleteList")]
        //public IActionResult DeleteList([FromHeader] Master master)
        //{
        //    if (master == null)
        //    {
        //        return BadRequest();
        //    }
        //    if (_context.Master.AsNoTracking().SingleOrDefault(m => m.Id == master.Id) == null)
        //    {
        //        return NotFound();
        //    }

        //    IQueryable<Category> categories = _context.Detail.Where(d => d.MasterId == master.Id).Join(_context.Category, d => d.CategoryId, c => c.Id, (d, c) => c).Distinct();
        //    _context.Category.RemoveRange(categories);
        //    _context.SaveChanges();

        //    // not necesarry since catgory references them, deleted when category deleted
        //    //IQueryable<Detail> details = _context.Detail.Where(d => d.MasterId == master.Id);
        //    //_context.Detail.RemoveRange(details);
        //    //_context.SaveChanges();

        //    _context.Master.Remove(master);
        //    _context.SaveChanges();
        //    return Ok();
        //}

        //private int GetNextCategorySequence(int masterId)
        //{
        //    Detail lastCategory = _context.Detail.Where(d => d.MasterId == masterId).AsNoTracking().OrderByDescending(d => d.CategorySequence).FirstOrDefault();
        //    return lastCategory == null ? 1 : ++lastCategory.CategorySequence;
        //}

        //private int GetNextItemSequence(int categoryId)
        //{
        //    Detail lastItem = _context.Detail.Where(d => d.CategoryId == categoryId).AsNoTracking().OrderByDescending(d => d.ItemSequence).FirstOrDefault();
        //    return lastItem == null ? 1 : ++lastItem.ItemSequence;
        //}

    }
}
