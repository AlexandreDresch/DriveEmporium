const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const modernCategory = await prisma.category.create({
      data: {
        name: "Modern Style Wheels",
        slug: "modern-wheels",
        imageUrl: "https://www.americanracing.com/media/catalog/product/9/5/957e4c18ccfa8df5726dd560ccb41a6e062dc47e3b0761b9c497eb136fee419e.jpeg?quality=80&fit=bounds&height=900&width=900",
      },
    });

    const modernWheels = [
      {
        name: "MACH FIVE",
        slug: "mach-five",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.americanracing.com/media/catalog/product/9/5/957e4c18ccfa8df5726dd560ccb41a6e062dc47e3b0761b9c497eb136fee419e.jpeg?quality=80&fit=bounds&height=900&width=900",
          "https://www.americanracing.com/media/catalog/product/f/8/f847b1957e2f70813816ca47c6089f453eafe2c21619d252496deb73cdb454b7.jpeg?quality=80&fit=bounds&height=900&width=900",
          "https://www.americanracing.com/media/catalog/product/0/c/0c9f3c3d2e6a088e5e606284966b65ef7e7d6b740342a3454919d06c58ee59fa.jpeg?quality=80&fit=bounds&height=900&width=900",
        ],
        basePrice: 318,
        categoryId: modernCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "TTF",
        slug: "ttf",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.americanracing.com/media/catalog/product/b/6/b63e2de32cbce8a20d4b9c0e7cf3eaba8c303afb5b7d4dd7b6f561be18981ad4.jpeg?quality=80&fit=bounds&height=900&width=900",
          "https://www.americanracing.com/media/catalog/product/8/5/854edbe701ebb4647eac58c4db7e4ed04f1f9886c2f32b3b0e4aeed012b7661a.jpeg?quality=80&fit=bounds&height=900&width=900",
          "https://www.americanracing.com/media/catalog/product/3/b/3b33aee6cec51a1f3cc11cd8d294d850c6a502c8dadf545af0a740851c64c8fb.jpeg?quality=80&fit=bounds&height=900&width=900",
        ],
        basePrice: 350,
        categoryId: modernCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: "OUTLAW I",
        slug: "outlaw-i",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.americanracing.com/media/catalog/product/8/8/881cfa9edd55b0e5da94671dd5693e0651bb4b31ac27df04a21def8ce79fd622.jpeg?quality=80&fit=bounds&height=900&width=900",
          "https://www.americanracing.com/media/catalog/product/e/3/e3f484d8e50037d705264b3ea0ea23dfc796e583cccff37b586630b9c9bbe6ac.jpeg?quality=80&fit=bounds&height=900&width=900",
        ],
        basePrice: 145,
        categoryId: modernCategory.id,
        discountPercent: 15, // 15% discount
      },
      {
        name: "AR942",
        slug: "ar942",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.americanracing.com/media/catalog/product/4/2/4204d63ffabdb7dba3e27a5d0d51410aaa63cbb7c64b00955ab0ee653a3c0229.jpeg?quality=80&fit=bounds&height=900&width=900",
          "https://www.americanracing.com/media/catalog/product/7/0/701961921334f15b704863e17548df1fa1e8364ecc0a07b405790236ba82b302.jpeg?quality=80&fit=bounds&height=900&width=900",
          "https://www.americanracing.com/media/catalog/product/0/a/0ace471bda1449ebf156cf7215df9d5bbe7a11198a457c57c2be9ce7c3db4a82.jpeg?quality=80&fit=bounds&height=900&width=900",
        ],
        basePrice: 454,
        categoryId: modernCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "CROSSFIRE",
        slug: "crossfire",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.americanracing.com/media/catalog/product/d/4/d4dba9724990a50cc85890cd03731831f4e84c305711541b8612ae76d0127f1b.jpeg?quality=80&fit=bounds&height=900&width=900",
          "https://www.americanracing.com/media/catalog/product/a/8/a87b0f01cc47ac05666c0e39005593c767c076217e3289555f6de499924dc5e6.jpeg?quality=80&fit=bounds&height=900&width=900",
        ],
        basePrice: 273,
        categoryId: modernCategory.id,
        discountPercent: 0, // 0% discount
      },
    ];

    await prisma.product.createMany({
      data: modernWheels,
    });

    const vintageCategory = await prisma.category.create({
      data: {
        name: "Vintage Style Wheels",
        slug: "vintage-wheels",
        imageUrl: "https://www.americanracing.com/media/catalog/product/1/4/14df97070c9bc4b4cb1f0a33d2d59e39ba7ee93ff8368a5cc4646cf52ac440b9.jpeg?quality=80&fit=bounds&height=900&width=900",
      },
    });

    const vintageWheels = [
      {
        name: "GROOVE",
        slug: "groove",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.americanracing.com/media/catalog/product/1/4/14df97070c9bc4b4cb1f0a33d2d59e39ba7ee93ff8368a5cc4646cf52ac440b9.jpeg?quality=80&fit=bounds&height=900&width=900",
          "https://www.americanracing.com/media/catalog/product/5/1/51d152df6b657692fec184c611aea2972e95d3131ff5339f00144119c5e44604.jpeg?quality=80&fit=bounds&height=900&width=900",
        ],
        basePrice: 313,
        categoryId: vintageCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "CLASSIC TORQ THRUST II CUSTOM",
        slug: "classic-torq-thust-ii-custom",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.americanracing.com/media/catalog/product/v/n/vncl205-min_1.png?quality=80&fit=bounds&height=900&width=900",
        ],
        basePrice: 512,
        categoryId: vintageCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "TT O",
        slug: "tt-o",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.americanracing.com/media/catalog/product/7/4/748bb251e57719f01f22b6df9796ed7ba3d848de9fad32ac116f130976d61167.jpeg?quality=80&fit=bounds&height=900&width=900",
          "https://www.americanracing.com/media/catalog/product/5/e/5e6a64d7da4558648bf032ff334a2029dedf6a7b983e72feb7be9d798d207d3f.jpeg?quality=80&fit=bounds&height=900&width=900",
        ],
        basePrice: 144,
        categoryId: vintageCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: "SALT FLAT",
        slug: "salt-flat",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.americanracing.com/media/catalog/product/7/9/790f93023dba5952080f1c28270f27d7534d474774a4d06cc703a2a3aeac5f1b.jpeg?quality=80&fit=bounds&height=900&width=900",
          "https://www.americanracing.com/media/catalog/product/3/d/3de56f810740954b92807e0d2a8dd5111d5a7a1fd22dc721920c989ec04d1ff4.jpeg?quality=80&fit=bounds&height=900&width=900",
        ],
        basePrice: 251,
        categoryId: vintageCategory.id,
        discountPercent: 15, // 15% discount
      },
      {
        name: "VN477",
        slug: "vn477",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.americanracing.com/media/catalog/product/e/5/e55f6ce3575872d66e608668be65a3d07d2efe2a73a01aa3fe6321a5c444a08a.jpeg?quality=80&fit=bounds&height=900&width=900",
        ],
        basePrice: 500,
        categoryId: vintageCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: "BURNOUT",
        slug: "burnout",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.americanracing.com/media/catalog/product/e/3/e365b2e8b1e1751cf7de28dd01b8b4ddcadcd43c365365ff10997e43c547c52e.jpeg?quality=80&fit=bounds&height=900&width=900",
        ],
        basePrice: 600,
        categoryId: vintageCategory.id,
        discountPercent: 25, // 25% discount
      },
    ];

    await prisma.product.createMany({
      data: vintageWheels,
    });

    const offRoadCategory = await prisma.category.create({
      data: {
        name: "Off-Road Category",
        slug: "off-road",
        imageUrl: "https://cdn.shortpixel.ai/spai/q_lossy+w_543+h_543+to_auto+ret_img/www.gearoffroad.com/wp-content/uploads/2021/10/760BZ_1.png",
      },
    });

    const offRoadWheels = [
      {
        name: "PROTO CALL",
        slug: "proto-call",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://cdn.shortpixel.ai/spai/q_lossy+w_543+h_543+to_auto+ret_img/www.gearoffroad.com/wp-content/uploads/2021/10/760BZ_1.png",
          "https://cdn.shortpixel.ai/spai/q_lossy+w_543+h_543+to_auto+ret_img/www.gearoffroad.com/wp-content/uploads/2021/10/760BZ_2.png",
          "https://cdn.shortpixel.ai/spai/q_lossy+w_543+h_543+to_auto+ret_img/www.gearoffroad.com/wp-content/uploads/2021/10/760BZ_3.png",
        ],
        basePrice: 750,
        categoryId: offRoadCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "NIGHTHAWK",
        slug: "nighthawk",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://cdn.shortpixel.ai/spai/q_lossy+w_543+h_543+to_auto+ret_img/www.gearoffroad.com/wp-content/uploads/2023/06/GEAR_774SB-179015-5-a.png",
          "https://cdn.shortpixel.ai/spai/q_lossy+w_543+h_543+to_auto+ret_img/www.gearoffroad.com/wp-content/uploads/2023/06/GEAR_774SB-179015-5-c.png",
          "https://cdn.shortpixel.ai/spai/q_lossy+w_543+h_543+to_auto+ret_img/www.gearoffroad.com/wp-content/uploads/2023/06/GEAR_774SB-179015-5-b.png",
        ],
        basePrice: 1200,
        categoryId: offRoadCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: "GLOCK",
        slug: "glock",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://cdn.shortpixel.ai/spai/q_lossy+w_543+h_543+to_auto+ret_img/www.gearoffroad.com/wp-content/uploads/2023/08/GEAR_772MB-2090-56-a.png",
          "https://cdn.shortpixel.ai/spai/q_lossy+w_543+h_543+to_auto+ret_img/www.gearoffroad.com/wp-content/uploads/2023/08/GEAR_772MB-2090-56-c.png",
          "https://cdn.shortpixel.ai/spai/q_lossy+w_543+h_543+to_auto+ret_img/www.gearoffroad.com/wp-content/uploads/2023/08/GEAR_772MB-2090-56-b.png",
        ],
        basePrice: 1500,
        categoryId: offRoadCategory.id,
        discountPercent: 15, // 15% discount
      },
      {
        name: "DOUBLE PUMP",
        slug: "double-pump",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://cdn.shortpixel.ai/spai/q_lossy+w_543+h_543+to_auto+ret_img/www.gearoffroad.com/wp-content/uploads/2021/09/GEAR_713B-2090-655-a.png",
          "https://cdn.shortpixel.ai/spai/q_lossy+w_543+h_543+to_auto+ret_img/www.gearoffroad.com/wp-content/uploads/2021/09/GEAR_713B-2090-655-c.png",
          "https://cdn.shortpixel.ai/spai/q_lossy+w_543+h_543+to_auto+ret_img/www.gearoffroad.com/wp-content/uploads/2021/09/GEAR_713B-2090-655-b.png",
        ],
        basePrice: 550,
        categoryId: offRoadCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: "MAGNUS",
        slug: "magnus",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://cdn.shortpixel.ai/spai/q_lossy+w_543+h_543+to_auto+ret_img/www.gearoffroad.com/wp-content/uploads/2023/08/GEAR_771B-2090-56-a.png",
          "https://cdn.shortpixel.ai/spai/q_lossy+w_543+h_543+to_auto+ret_img/www.gearoffroad.com/wp-content/uploads/2023/08/GEAR_771B-2090-56-c.png",
          "https://cdn.shortpixel.ai/spai/q_lossy+w_543+h_543+to_auto+ret_img/www.gearoffroad.com/wp-content/uploads/2023/08/GEAR_771B-2090-56-b.png",
        ],
        basePrice: 250,
        categoryId: offRoadCategory.id,
        discountPercent: 0, // 0% discount
      },
      {
        name: "PRIMACY",
        slug: "primacy",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://cdn.shortpixel.ai/spai/q_lossy+w_543+h_543+to_auto+ret_img/www.gearoffroad.com/wp-content/uploads/2023/08/GEAR_768BM-2090-8-a.png",
          "https://cdn.shortpixel.ai/spai/q_lossy+w_543+h_543+to_auto+ret_img/www.gearoffroad.com/wp-content/uploads/2023/08/GEAR_768BM-2090-8-c.png",
          "https://cdn.shortpixel.ai/spai/q_lossy+w_543+h_543+to_auto+ret_img/www.gearoffroad.com/wp-content/uploads/2023/08/GEAR_768BM-2090-8-b.png",
        ],
        basePrice: 200,
        categoryId: offRoadCategory.id,
        discountPercent: 0, // 0% discount
      },
    ];

    await prisma.product.createMany({
      data: offRoadWheels,
    });

    const multiPieceCategory = await prisma.category.create({
      data: {
        name: "Multi Piece Category",
        slug: "multi-piece-category",
        imageUrl: "https://www.offfset.com/cdn/shop/products/RSE_Polished_A1_1000_700x.png?v=1656669421",
      },
    });

    const multiPieceWheels = [
      {
        name: "Rotiform RSE 3-Piece",
        slug: "rotiform-rse-3-piece",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.offfset.com/cdn/shop/products/RSE_Polished_A1_1000_700x.png?v=1656669421",
          "https://www.offfset.com/cdn/shop/products/RSE_Polished_A2_1000_700x.png?v=1656669425",
          "https://www.offfset.com/cdn/shop/products/RSE_Polished_A3_1000_700x.png?v=1656669585",
          "https://www.offfset.com/cdn/shop/products/RSE_Polished_Face_1000_700x.png?v=1656669588",
        ],
        basePrice: 1450,
        categoryId: multiPieceCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "Rotiform COS 3-Piece",
        slug: "rotiform-cos-3-piece",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.offfset.com/cdn/shop/products/ROTIFORM-COS-18X12-5LUG-GLOSS-BLACK-A1_1000_3960_700x.png?v=1656558723",
          "https://www.offfset.com/cdn/shop/products/ROTIFORM-COS-18X12-5LUG-GLOSS-BLACK-A2_1000_9165_700x.png?v=1656558345",
          "https://www.offfset.com/cdn/shop/products/ROTIFORM-COS-18X12-5LUG-GLOSS-BLACK-FACE_1000_7188_700x.png?v=1656558349",
          "https://www.offfset.com/cdn/shop/products/ROTIFORM-COS-18X12-5LUG-GLOSS-BLACK-A3_1000_8102_700x.png?v=1656558352",
        ],
        basePrice: 1150,
        categoryId: multiPieceCategory.id,
        discountPercent: 0, // 10% discount
      },
      {
        name: "Rotiform LHR 3-Piece",
        slug: "rotiform-lhr-3-piece",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.offfset.com/cdn/shop/products/Roritform_LHR_Brushed-Matte-DDT-center-Gold-HW_A1_1000_700x.png?v=1656664906",
          "https://www.offfset.com/cdn/shop/products/Roritform_LHR_Brushed-Matte-DDT-center-Gold-HW_A2_1000_700x.png?v=1656664910",
          "https://www.offfset.com/cdn/shop/products/Roritform_LHR_Brushed-Matte-DDT-center-Gold-HW_A3_1000_700x.png?v=1656546105",
          "https://www.offfset.com/cdn/shop/products/Roritform_LHR_Brushed-Matte-DDT-center-Gold-HW_Face_1000_700x.png?v=1656664912",
        ],
        basePrice: 2000,
        categoryId: multiPieceCategory.id,
        discountPercent: 5, // 10% discount
      },
      {
        name: "Rotiform LSR-M 3-Piece",
        slug: "rotiform-lsr-m-3-piece",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.offfset.com/cdn/shop/products/ROTIFORM-LSR-M-18X10_2945.5-5-ET-36-MATTE-SILVER-N-CHROME-LIP-A1_1000_d88f1ab0-c6dc-463e-8c9f-f80a9edf1c98_700x.png?v=1668611579",
          "https://www.offfset.com/cdn/shop/products/ROTIFORM-LSR-M-18X10_1528.5-5-ET-36-MATTE-SILVER-N-CHROME-LIP-A2_1000_6b150385-e707-4845-a1d0-9d08252aa3ec_700x.png?v=1668611579",
          "https://www.offfset.com/cdn/shop/products/ROTIFORM-LSR-M-18X10_8906.5-5-ET-36-MATTE-SILVER-N-CHROME-LIP-FACE_1000_eeda2ca6-0119-459f-9cec-2b583eedf75b_700x.png?v=1668611579",
          "https://www.offfset.com/cdn/shop/products/ROTIFORM-LSR-M-18X10_3348.5-5-ET-36-MATTE-SILVER-N-CHROME-LIP-A3_1000_6541b742-2ea7-4518-8741-9031c4f96c3c_700x.png?v=1668611579",
        ],
        basePrice: 2500,
        categoryId: multiPieceCategory.id,
        discountPercent: 15, // 15% discount
      },
      {
        name: "Rotiform BM1 3-Piece",
        slug: "rotiform-bm1-3-piece",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.offfset.com/cdn/shop/products/Rotifrom_BM1_DDT_Matte_clear_A1_1000_2d07c9ba-eb17-41b6-925b-09057394d7d4_700x.png?v=1656566275",
          "https://www.offfset.com/cdn/shop/products/Rotifrom_BM1_DDT-Matte-clear_A2_1000_700x.png?v=1656566281",
          "https://www.offfset.com/cdn/shop/products/Rotifrom_BM1_DDT-Matte-clear_A3_1000_700x.png?v=1656566279",
          "https://www.offfset.com/cdn/shop/products/Rotifrom_BM1_DDT-Matte-clear_Face_10001_700x.png?v=1656566104",
        ],
        basePrice: 3000,
        categoryId: multiPieceCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "Rotiform KPS 3-Piece",
        slug: "rotiform-kps-3-piece",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.offfset.com/cdn/shop/products/KPS_Matte-BLK-Gloss-BLK-Lip_A1_1000_700x.png?v=1656663649",
          "https://www.offfset.com/cdn/shop/products/KPS_Matte-BLK-Gloss-BLK-Lip_A2_1000_700x.png?v=1656663654",
          "https://www.offfset.com/cdn/shop/products/KPS_Matte-BLK-Gloss-BLK-Lip_A3_1000_700x.png?v=1656663656",
          "https://www.offfset.com/cdn/shop/products/KPS_Matte-BLK-Gloss-BLK-Lip_Face_1000_700x.png?v=1656663658",
        ],
        basePrice: 3000,
        categoryId: multiPieceCategory.id,
        discountPercent: 5, // 5% discount
      },
    ];

    await prisma.product.createMany({
      data: multiPieceWheels,
    });

    const directionalCategory = await prisma.category.create({
      data: {
        name: "Directional Category",
        slug: "directional-category",
        imageUrl: "https://www.hpdwheels.com/cdn/shop/files/TILTED_cc0c8690-a732-43ee-bf82-187b2ef8fdd8_1024x1024.png?v=1688128784",
      },
    });

    const directionalWheels = [
      {
        name: "KLASSIK RADER",
        slug: "klassik-rader",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.hpdwheels.com/cdn/shop/files/TILTED_cc0c8690-a732-43ee-bf82-187b2ef8fdd8_1024x1024.png?v=1688128784",
          "https://www.hpdwheels.com/cdn/shop/files/1356-LS_1024x1024.png?v=1688128784",
        ],
        basePrice: 1500,
        categoryId: directionalCategory.id,
        discountPercent: 15, // 15% discount
      },
      {
        name: "KG1 KF004 Vile",
        slug: "kg1-kf004-vile",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ebayimg.com/images/g/4M8AAOSwmnFk07EU/s-l1600.png",
          "https://i.ebayimg.com/images/g/-z0AAOSwh-Vk07EP/s-l1600.jpg",
          "https://i.ebayimg.com/images/g/IaAAAOSwM3pk07EP/s-l1600.jpg",
        ],
        basePrice: 4000,
        categoryId: directionalCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: "HD OFF-ROAD SAW",
        slug: "hd-off-road-saw",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.hpdwheels.com/cdn/shop/products/hd-off-road-wheels-truck-suv-wheels-20x9-0-6x135-6x139-7-et15m-5-6-in-106-2mm-hd-off-road-wheels-saw-satin-black-with-machined-face-15318572597331.png",
          "https://www.hpdwheels.com/cdn/shop/products/hd-off-road-wheels-truck-suv-wheels-20x10-0-5x127-5x139-7-et-25m-4-53-in-78-1mm-hd-off-road-wheels-saw-satin-black-with-machined-face-15318572662867_1024x1024.png?v=1605542745",
          "https://www.hpdwheels.com/cdn/shop/products/hd-off-road-wheels-truck-suv-wheels-20x10-0-6x135-6x139-7-et-25m-4-53-in-106-2mm-hd-off-road-wheels-saw-satin-black-with-machined-face-15318572630099_1024x1024.png?v=1605542745",
          "https://www.hpdwheels.com/cdn/shop/products/hd-off-road-wheels-truck-suv-wheels-22x10-0-6x135-6x139-7-et-10m-5-12-in-106-2mm-hd-off-road-wheels-saw-satin-black-with-machined-face-15318572695635_1024x1024.png?v=1605542745",
        ],
        basePrice: 2500,
        categoryId: directionalCategory.id,
        discountPercent: 0, // 0% discount
      },
      {
        name: "VN475 TTO DIRECTIONAL",
        slug: "vn475-tto-directional",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://tireswheelsdirect.com/wp-content/uploads/2022/03/hVN4751.png",
          "https://tireswheelsdirect.com/wp-content/uploads/2022/03/VN475VN4751Standardg0mdue3zta39m0Rt1Fl.png",
          "https://tireswheelsdirect.com/wp-content/uploads/2022/03/VN475VN4751Faceg0mdue43ygwWyAZoT-X.png",
        ],
        basePrice: 3200,
        categoryId: directionalCategory.id,
        discountPercent: 0, // 0% discount
      },
      {
        name: "Fuel Forged FF39 Directional",
        slug: "fuel-forged-ff39-directional",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://duallywheels.ca/cdn/shop/products/FF39-22x85-10-Lug-Rear-Black-Milled_A1_shadow_1000_9030_747x729.png?v=1658777076",
          "https://duallywheels.ca/cdn/shop/products/FF39-22x85-10-Lug-Front-Black-Milled_A1_shadpow_1000_6640_747x728.png?v=1658777076",
          "https://duallywheels.ca/cdn/shop/products/FF39-22x85-10-Lug-Rear-Black-Milled_A2_shadow_1000_6507_747x763.png?v=1658777076",
          "https://duallywheels.ca/cdn/shop/products/FF39-22x85-10-Lug-Rear-Black-Milled_FACE_shadow_1000_6775_747x764.png?v=1658777076",
        ],
        basePrice: 3500,
        categoryId: directionalCategory.id,
        discountPercent: 0, // 0% discount
      },
      {
        name: "Tec Mono 1.7 Directional",
        slug: "tec-mono-1.7-directional",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://forgiato.com/photos/wheels/forgiato-tecnica-mono-1-1-3.png",
          "https://forgiato.com/photos/wheels/forged-custom-wheel-tec_mono_1.7-tecnica-wheel_guidelines-2178-09-05-2018.png",
          "https://forgiato.com/photos/wheels/forged-custom-wheel-tec_mono_1.7-tecnica-wheel_guidelines2-2179-09-05-2018.png",
          "https://forgiato.com/photos/wheels/forged-custom-wheel-tec_mono_1.7-tecnica-wheel_guidelines-2342-04-04-2019.png",
        ],
        basePrice: 4200,
        categoryId: directionalCategory.id,
        discountPercent: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: directionalWheels,
    });

    const performanceCategory = await prisma.category.create({
      data: {
        name: "Performance Category",
        slug: "performance-category",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/speakers.png",
      },
    });

    const performanceWheels = [
      {
        name: "RV-MR01",
        slug: "rv-mr01",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://rvrnwheel.com/cdn/shop/products/custom-1-piece-y-spoke-forged-performance-wheels-rv-mr01-475644.png?v=1687752269",
          "https://rvrnwheel.com/cdn/shop/products/1-piece-y-spoke-forged-wheels-series-rv-mr01-994559.png?v=1687679865",
          "https://rvrnwheel.com/cdn/shop/products/1-piece-y-spoke-forged-wheels-series-rv-mr01-600893.png?v=1687679865",
          "https://rvrnwheel.com/cdn/shop/products/1-piece-y-spoke-forged-wheels-series-rv-mr01-188270.png?v=1687679865",
        ],
        basePrice: 1200,
        categoryId: performanceCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: "FORGELINE GA3R OPEN LUG",
        slug: "forgeline-ga3r-open-lug",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://forgeline.com/wp-content/uploads/2018/10/GA3R-Open-Lug-Trans-Smoke-1024x1024-768x768.png",
          "https://forgeline.com/wp-content/uploads/2018/06/GA3R-Open-Lug-1024x1024-768x768.png",
          "https://forgeline.com/wp-content/uploads/2019/10/GA3R-Open-Blue-Bolts-768x768.png",
          "https://forgeline.com/wp-content/uploads/2020/02/GA3R-Open-SG-SB-768x768.png",
        ],
        basePrice: 4500,
        categoryId: performanceCategory.id,
        discountPercent: 15, // 15% discount
      },
      {
        name: "FORGELINE WC3",
        slug: "forgeline-wc3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://forgeline.com/wp-content/uploads/2017/08/6943159690_28ea3154a8_o-PNG-768x733.png",
          "https://forgeline.com/wp-content/uploads/2017/08/6943163686_2130449450_o-PNG-768x694.png",
          "https://forgeline.com/wp-content/uploads/2017/08/7089230201_59d6d07355_o-PNG.png",
          "https://forgeline.com/wp-content/uploads/2017/08/WC3_Satin_Black_Polished-1-PNG-768x649.png",
        ],
        basePrice: 4000,
        categoryId: performanceCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "FORGELINE SO3",
        slug: "forgeline-so3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://forgeline.com/wp-content/uploads/2017/08/SO3MatteBl-PNG-768x708.png",
          "https://forgeline.com/wp-content/uploads/2017/08/SO3SIL2-PNG-768x748.png",
          "https://forgeline.com/wp-content/uploads/2017/08/6943157362_5a37347c92_o-PNG-768x738.png",
          "https://forgeline.com/wp-content/uploads/2017/08/7089231465_d7b17cebae_o-PNG-768x673.png",
        ],
        basePrice: 3200,
        categoryId: performanceCategory.id,
        discountPercent: 0, // 0% discount
      },
      {
        name: "FORGELINE DS3",
        slug: "forgeline-ds3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://forgeline.com/wp-content/uploads/2017/08/6943177938_9b4eb32fee_o-PNG-768x768.png",
          "https://forgeline.com/wp-content/uploads/2017/08/7089236181_2e06e0b976_o-PNG-768x711.png",
          "https://forgeline.com/wp-content/uploads/2017/08/7089237857_b5a07b108a_o-PNG-768x768.png",
          "https://forgeline.com/wp-content/uploads/2017/08/6943161708_d682363855_o-PNG-768x799.png",
        ],
        basePrice: 3500,
        categoryId: performanceCategory.id,
        discountPercent: 0, // 0% discount
      },
      {
        name: "FORGELINE ZX3",
        slug: "forgeline-zx3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://forgeline.com/wp-content/uploads/2017/08/ZX3TIT-PNG-768x726.png",
          "https://forgeline.com/wp-content/uploads/2017/08/7089229177_066c8e8c02_o-PNG-768x776.png",
          "https://forgeline.com/wp-content/uploads/2017/08/zx3-001-PNG-768x728.png",
          "https://forgeline.com/wp-content/uploads/2017/08/zx3r-capslvwheel-PNG-768x714.png",
        ],
        basePrice: 2500,
        categoryId: performanceCategory.id,
        discountPercent: 0, // 0% discount
      },
    ];

    await prisma.product.createMany({
      data: performanceWheels,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
