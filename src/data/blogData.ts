import { BlogPost, UserRating } from '../types';

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Integrating Interactive STEM Calculators in CBC Grade 8 Linear Equations',
    slug: 'integrating-interactive-stem-calculators-cbc-grade-8',
    excerpt: 'How practical digital tools bridge abstract algebraic concepts with real-world Kenyan market pricing and student engagement.',
    content: `
# Integrating Interactive STEM Calculators in CBC Grade 8 Linear Equations

As Kenya's Competency-Based Curriculum (CBC) shifts secondary education from theoretical memorization to practical core competencies, Mathematics instruction requires innovative real-world integration.

## The Core Challenge in Linear Algebra
Traditional algebra lessons often present equations like \`3x + 1200 = 7200\` without real-world grounding. For Junior Secondary learners in Grade 8, this abstraction can hinder retention and critical thinking.

## A Practical Kenyan Solution
In our Mathematics classroom at Menwe Junior Secondary School, we contextualized algebraic equations using micro-business profit models. For instance, learners construct equations representing local clothing merchandise sales:

$$ \\text{Profit} = (\\text{Selling Price} \\times x) - (\\text{Cost Price} \\times x) - \\text{Fixed Stall Fee} $$

### Key Pedagogy Takeaways
1. **Digital Literacy**: Learners test different variable inputs using interactive web solvers.
2. **Critical Thinking**: Students debate break-even scenarios for small enterprise ventures like StyledKid.
3. **Peer Collaboration**: Group problem-solving encourages values-based leadership.

> *"When students see math solving real income scenarios, abstraction turns into curiosity."* — Teacher Kelly Muthomi Kinoti (TSC Educator)
    `,
    authorName: 'Kelly Muthomi Kinoti',
    authorRole: 'TSC Registered Educator & STEM Lead',
    category: 'cbc-math',
    tags: ['CBC Pedagogy', 'Grade 8 Math', 'STEM Education', 'Digital Tools'],
    coverImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    publishedAt: '2026-07-20',
    readTime: '4 min read',
    views: 342,
    likes: 48,
    ratingCount: 12,
    ratingSum: 60, // 5.0 avg
    isFeatured: true,
    status: 'published',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
    seoMetadata: {
      title: 'Integrating Interactive STEM Calculators in CBC Grade 8 Linear Equations | Knowledge Hub',
      description: 'How practical digital tools bridge abstract algebraic concepts with real-world Kenyan market pricing and student engagement.',
      keywords: ['CBC Pedagogy', 'Grade 8 Math', 'STEM Education', 'Digital Tools']
    },
    relatedSlugs: ['architecting-ecommerce-systems-automated-mpesa-stk-push', 'spss-quantitative-data-research-multiple-regression-modeling'],
    comments: [
      {
        id: 'c1',
        postId: 'blog-1',
        authorName: 'Dr. Elizabeth Mwangi',
        authorRole: 'School Principal',
        content: 'Exceptional pedagogical framework, Teacher Kelly! The integration of digital tools has greatly improved algebra performance across Grade 8 classrooms.',
        createdAt: '2026-07-21',
        likes: 8
      },
      {
        id: 'c2',
        postId: 'blog-1',
        authorName: 'James Kariuki',
        authorRole: 'Math Educator',
        content: 'This approach makes equation solving so intuitive. I will be adopting the break-even problem model in my school as well.',
        createdAt: '2026-07-22',
        likes: 5
      }
    ]
  },
  {
    id: 'blog-2',
    title: 'Architecting High-Performance E-Commerce Systems with Automated M-Pesa STK Push',
    slug: 'architecting-ecommerce-systems-automated-mpesa-stk-push',
    excerpt: 'A technical deep-dive into PHP/MySQL database design, web security, and M-Pesa Daraja API integration for StyledKid.co.ke.',
    content: `
# Architecting High-Performance E-Commerce Systems with Automated M-Pesa STK Push

In Kenya's fast-expanding digital economy, e-commerce applications must prioritize mobile-first responsiveness, zero-friction checkout, and instant payment validation.

## The Engineering Challenge
Standard manual payment verification (where customers type transaction codes) suffers high cart abandonment rates. Automating Daraja M-Pesa Express STK Push delivers a seamless 1-click payment flow directly to the customer's phone screen.

## Architectural Key Components
1. **Lightweight MySQL Catalog**: Optimized product schemas with foreign keys for fast filtering.
2. **Secure Webhooks**: Asynchronous callback handlers validating M-Pesa \`MerchantRequestID\` and \`CheckoutRequestID\`.
3. **Responsive Front-End UI**: Fast loading image assets, instant cart state updates, and clear order tracking.

\`\`\`json
{
  "BusinessShortCode": "174379",
  "TransactionType": "CustomerPayBillOnline",
  "Amount": "2500",
  "PartyA": "254708220323",
  "PhoneNumber": "254708220323",
  "CallBackURL": "https://styledkid.co.ke/api/mpesa-callback.php"
}
\`\`\`

## Performance Metrics
- **38% Reduction** in cart abandonment.
- **Sub-3 second** payment processing notification.
- **100% Auditability** of client transaction logs.
    `,
    authorName: 'Kelly Muthomi Kinoti',
    authorRole: 'Full-Stack Developer & Systems Architect',
    category: 'web-dev',
    tags: ['PHP', 'MySQL', 'M-Pesa API', 'E-Commerce', 'Web Security'],
    coverImage: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=1200&q=80',
    publishedAt: '2026-07-15',
    readTime: '6 min read',
    views: 520,
    likes: 84,
    ratingCount: 16,
    ratingSum: 80, // 5.0 avg
    isFeatured: true,
    status: 'published',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
    seoMetadata: {
      title: 'Architecting High-Performance E-Commerce Systems with Automated M-Pesa STK Push | Knowledge Hub',
      description: 'A technical deep-dive into PHP/MySQL database design, web security, and M-Pesa Daraja API integration for StyledKid.co.ke.',
      keywords: ['PHP', 'MySQL', 'M-Pesa API', 'E-Commerce', 'Web Security']
    },
    relatedSlugs: ['integrating-interactive-stem-calculators-cbc-grade-8', 'spss-quantitative-data-research-multiple-regression-modeling'],
    comments: [
      {
        id: 'c3',
        postId: 'blog-2',
        authorName: 'Samuel K. Nderitu',
        authorRole: 'StyledKid Founder',
        content: 'Kelly built this system for us and our automated sales have grown tremendously. Very clean documentation!',
        createdAt: '2026-07-16',
        likes: 12
      }
    ]
  },
  {
    id: 'blog-3',
    title: 'SPSS Quantitative Data Research & Multiple Regression Modeling in Education',
    slug: 'spss-quantitative-data-research-multiple-regression-modeling',
    excerpt: 'Step-by-step statistical guidelines for analyzing ICT intervention metrics in secondary school academic performance.',
    content: `
# SPSS Quantitative Data Research & Multiple Regression Modeling in Education

Rigorous educational research relies on valid statistical modeling to prove hypotheses regarding instructional innovations.

## Research Methodology Overview
Using SPSS 28, we conducted a quantitative study evaluating the correlation between digital lesson plan tools ($X_1$), teacher ICT proficiency ($X_2$), and student examination scores ($Y$).

### Statistical Regression Model Formula
$$ Y = \\beta_0 + \\beta_1 X_1 + \\beta_2 X_2 + \\epsilon $$

## Key Statistical Outputs
- **R-Squared ($R^2$) = 0.742**: 74.2% of variance in student math scores is explained by digital tool integration and teacher guidance.
- **ANOVA Test ($F = 42.15, p < 0.001$)**: Statistical significance confirmed.
- **Cronbach Alpha = 0.88**: High questionnaire reliability across 270 sampled respondents.

## Practical Recommendations for School Administrators
1. Conduct regular ICT workshops for STEM teaching faculties.
2. Maintain local cloud servers for uninterrupted school ERP access.
3. Utilize data dashboards for early student remediation.
    `,
    authorName: 'Kelly Muthomi Kinoti',
    authorRole: 'Academic Researcher & Data Analyst',
    category: 'spss-research',
    tags: ['SPSS', 'Quantitative Analysis', 'Regression Modeling', 'Education Research'],
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    publishedAt: '2026-07-08',
    readTime: '5 min read',
    views: 289,
    likes: 39,
    ratingCount: 8,
    ratingSum: 40,
    isFeatured: false,
    status: 'published',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
    seoMetadata: {
      title: 'SPSS Quantitative Data Research & Multiple Regression Modeling in Education | Knowledge Hub',
      description: 'Step-by-step statistical guidelines for analyzing ICT intervention metrics in secondary school academic performance.',
      keywords: ['SPSS', 'Quantitative Analysis', 'Regression Modeling', 'Education Research']
    },
    relatedSlugs: ['integrating-interactive-stem-calculators-cbc-grade-8', 'architecting-ecommerce-systems-automated-mpesa-stk-push'],
    comments: []
  }
];

export const INITIAL_USER_RATINGS: UserRating[] = [
  {
    id: 'r1',
    userName: 'Dr. Elizabeth Mwangi',
    userRole: 'School Principal',
    rating: 5,
    category: 'teaching',
    reviewTitle: 'Outstanding STEM & CBC Instructional Leader',
    reviewText: 'Teacher Kelly brings exceptional clarity, energy, and digital innovation to secondary Mathematics. His students consistently excel.',
    createdAt: '2026-07-22'
  },
  {
    id: 'r2',
    userName: 'Samuel K. Nderitu',
    userRole: 'E-Commerce Founder',
    rating: 5,
    category: 'web-dev',
    reviewTitle: 'Masterful Full-Stack Developer & M-Pesa Expert',
    reviewText: 'Delivered our StyledKid e-commerce platform ahead of schedule with flawless M-Pesa integration. Highly recommended!',
    createdAt: '2026-07-18'
  },
  {
    id: 'r3',
    userName: 'Grace W. Mutua',
    userRole: 'WildLens Director',
    rating: 5,
    category: 'web-dev',
    reviewTitle: 'Fast, Professional & Great Communication',
    reviewText: 'Kelly created our tour booking portal with excellent custom plugins and responsiveness. Inquiry rates increased by 40%.',
    createdAt: '2026-07-10'
  }
];
