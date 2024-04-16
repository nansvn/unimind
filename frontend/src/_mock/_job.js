import { countries } from 'src/assets/data';

import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const JOB_DETAILS_TABS = [
  { value: 'content', label: 'Job Content' },
  { value: 'candidates', label: 'Candidates' },
];

export const TAGS = ['Happy', 'Chill', 'Special', 'Teamwork', 'Fight', 'Communication', 'Sad'];

export const Mood_Type = ['Blue', 'Green', 'Pink', 'Yellow', 'Grey'];

export const JOB_EMPLOYMENT_TYPE_OPTIONS = [
  { value: 'Full-time', label: 'Full-time' },
  { value: 'Part-time', label: 'Part-time' },
  { value: 'On Demand', label: 'On Demand' },
  { value: 'Negotiable', label: 'Negotiable' },
];

export const JOB_EXPERIENCE_OPTIONS = [
  {
    value: 'The sun slowly set over the horizon, painting the sky in vibrant hues of orang',
    label: 'The sun slowly set over the horizon, painting the sky in vibrant hues of orang',
  },
  {
    value: '1 year exp',
    label: 'The aroma of freshly brewed coffee filled the air, awakening my senses.',
  },
  {
    value: '2 year exp',
    label: 'She eagerly opened the gift, her eyes sparkling with excitement.',
  },
  {
    value: '> 3 year exp',
    label: 'The old oak tree stood tall and majestic, its branches swaying gently in the bree',
  },
];

export const JOB_BENEFIT_OPTIONS = [
  { value: 'Free parking', label: 'Free parking' },
  { value: 'Bonus commission', label: 'Bonus commission' },
  { value: 'Travel', label: 'Travel' },
  { value: 'Device support', label: 'Device support' },
  { value: 'Health care', label: 'Health care' },
  { value: 'Training', label: 'Training' },
  { value: 'Health Insurance', label: 'Health Insurance' },
  { value: 'Retirement Plans', label: 'Retirement Plans' },
  { value: 'Paid Time Off', label: 'Paid Time Off' },
  { value: 'Flexible Work Schedule', label: 'Flexible Work Schedule' },
];

export const JOB_PUBLISH_OPTIONS = [
  {
    value: 'published',
    label: 'Published',
  },
  {
    value: 'draft',
    label: 'Draft',
  },
];

export const MOOD_SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
];

const CANDIDATES = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  role: _mock.role(index),
  name: _mock.fullName(index),
  avatarUrl: _mock.image.avatar(index),
}));

const CONTENT = `
<h6>Job Description</h6>
<br/>

<p>Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>

<br/>
<br/>

<h6>Key Responsibilities</h6>
<br/>
<ul>
  <li>Working with agency for design drawing detail, quotation and local production.</li>
  <li>Produce window displays, signs, interior displays, floor plans and special promotions displays.</li>
  <li>Change displays to promote new product launches and reflect festive or seasonal themes.</li>
  <li>Planning and executing the open/renovation/ closing store procedure.</li>
  <li>Follow‐up store maintenance procedure and keep updating SKU In &amp; Out.</li>
  <li>Monitor costs and work within budget.</li>
  <li>Liaise with suppliers and source elements.</li>
</ul>

<br/>
<br/>

<h6>Why You'll Love Working Here</h6>
<br/>
<ul>
  <li>Working with agency for design drawing detail, quotation and local production.</li>
  <li>Produce window displays, signs, interior displays, floor plans and special promotions displays.</li>
  <li>Change displays to promote new product launches and reflect festive or seasonal themes.</li>
  <li>Planning and executing the open/renovation/ closing store procedure.</li>
  <li>Follow‐up store maintenance procedure and keep updating SKU In &amp; Out.</li>
  <li>Monitor costs and work within budget.</li>
  <li>Liaise with suppliers and source elements.</li>
</ul>
`;

export const _jobs = [...Array(12)].map((_, index) => {
  const publish = index % 3 ? 'published' : 'draft';

  const salary = {
    type: (index % 5 && 'Custom') || 'Hourly',
    price: _mock.number.price(index),
    negotiable: _mock.boolean(index),
  };

  const benefits = JOB_BENEFIT_OPTIONS.slice(0, 3).map((option) => option.label);

  const experience =
    JOB_EXPERIENCE_OPTIONS.map((option) => option.label)[index] || JOB_EXPERIENCE_OPTIONS[1].label;

  const company = {
    name: _mock.companyName(index),
    logo: _mock.image.company(index),
    phoneNumber: _mock.phoneNumber(index),
    fullAddress: _mock.fullAddress(index),
  };

  const Dates = _mock.time(index);

  const locations = countries.slice(1, index + 2).map((option) => option.label);

  return {
    id: _mock.id(index),
    salary,
    publish,
    company,
    benefits,
    Mood_Type,
    locations,
    experience,
    content: CONTENT,
    candidates: CANDIDATES,
    date: Dates,
    role: _mock.role(index),
    title: _mock.jobTitle(index),
    createdAt: _mock.time(index),
    expiredDate: _mock.time(index),
    skills: TAGS.slice(0, 3),
    totalViews: _mock.number.nativeL(index),
  };
});
